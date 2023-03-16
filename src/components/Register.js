import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import "./Register.css";
import { CountryService } from "../services/CountryService";

function Register() {
  // const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const countryservice = new CountryService();

  const countries = [
    { label: "California", value: "tehran" },
    { label: "Manhatan", value: "isfahan" },
    { label: "Sanfransisco", value: "mashhad" },
    { label: "New York", value: "ahvaz" },
    { label: "LA", value: "yazd" },
    { label: "Arizona", value: "kerman" },
   
  ];

  // useEffect(() => {
  //     countryservice.getCountries().then(data => setCountries(data));
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "username is required";
      }

      if (!data.email) {
        errors.email = "email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "email format is incorrect";
      }

      if (!data.password) {
        errors.password = "password is incorrect";
      }

      if (!data.accept) {
        errors.accept = "you have to agree to terms and conditions";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Choose a Password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one small character</li>
        <li>At least one big character</li>
        <li>At least one number</li>
        <li>At least one 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    
      <div className="form-demo">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
          style={{ width: "30vw" }}
        >
          <div className="flex align-items-center flex-column pt-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "5rem", color: "var(--green-500)" }}
            ></i>
            <h5>Registration was successful!</h5>
            <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
              Your account was created: <b>{formData.name}</b> ;
              it'll be valid next 30 days without activation. Please check{" "}
              <b>{formData.email}</b> for activation instructions.
            </p>
          </div>
        </Dialog>

        <div>
          <div>
            <h5>
              Please fill in the form
            </h5>
            <form onSubmit={formik.handleSubmit} className="p-fluid">
              <div className="field">
                <span>
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": isFormFieldValid("name"),
                    })}
                  >
                    Username*
                  </label>
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                    className={classNames({
                      "p-invalid": isFormFieldValid("name"),
                    })}
                  />
                </span>
                {getFormErrorMessage("name")}
              </div>
              <div className="field">
                <label
                  htmlFor="email"
                  className={classNames({
                    "p-error": isFormFieldValid("email"),
                  })}
                >
                  Email *
                </label>

                <span className=" p-input-icon-left">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": isFormFieldValid("email"),
                    })}
                  />
                </span>
                {getFormErrorMessage("email")}
              </div>
              <div className="field">
                <span>
                  <label
                    htmlFor="password"
                    className={classNames({
                      "p-error": isFormFieldValid("password"),
                    })}
                  >
                    Password*
                  </label>
                  <Password
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    toggleMask
                    className={classNames({
                      "p-invalid": isFormFieldValid("password"),
                    })}
                    header={passwordHeader}
                    footer={passwordFooter}
                  />
                </span>
                {getFormErrorMessage("password")}
              </div>
              <div className="field">
                <span>
                  <label htmlFor="date">Birth Day</label>
                  <Calendar
                    id="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    dateFormat="dd/mm/yy"
                    mask="99/99/9999"
                    showIcon
                  />
                </span>
              </div>
              <div className="field">
                <span>
                  <label htmlFor="country">State</label>
                  <Dropdown
                    id="country"
                    name="country"
                    className={` ${
                      formik.touched.category && formik.errors.category
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    options={countries}
                    placeholder="choose ... "
                  />
                </span>
              </div>
              <div className="field-checkbox">
                <Checkbox
                  inputId="accept"
                  name="accept"
                  checked={formik.values.accept}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("accept"),
                  })}
                />
                <label
                  htmlFor="accept"
                  className={classNames({
                    "p-error": isFormFieldValid("accept"),
                  })}
                >
                  I agree with the term and conditions*
                </label>
              </div>

              <Button type="submit" label="Submit" className="mt-2" />
            </form>
          </div>
        </div>
      </div>
    
  );
}

export default Register;
