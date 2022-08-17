import { Link } from "react-router-dom";
import "./MainNavigation.css";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import "react-slideshow-image/dist/styles.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Password } from "primereact/password";
import Register from "./Register";

function MainNavigation() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <header className="header">
      <ul className="login">
        <li>
          <Button
            label="ورود"
            className="login-button"
            onClick={() => setLogin(true)}
          />{" "}
          &nbsp;
          <Dialog
            header="ورود به سایت"
            visible={login}
            style={{ width: "40vw" }}
            onHide={() => setLogin(false)}
          >
            <div>
              <ul className="add_product_field">
                <li className="label">
                  <label htmlFor="username">نام کاربری</label>
                </li>
                <li>
                  {" "}
                  <InputText id="username" />
                </li>
              </ul>

              <div style={{ marginTop: "2rem" }}>
                <ul className="add_product_field">
                  <li className="label">
                    <label htmlFor="password">رمز عبور</label>
                  </li>
                  <li>
                    {" "}
                    <Password inputId="password" toggleMask />
                  </li>
                </ul>
              </div>

              <div
                style={{
                  marginTop: "4rem",
                  marginLeft: "0rem",
                  display: "table",
                  margin: "auto",
                }}
              >
                <Link to="/dashboard">
                  <Button
                    label="ورود"
                    onClick={() => {
                      setLogin(false);
                    }}
                  />
                </Link>
              </div>
            </div>
          </Dialog>
        </li>
        <li>
          <Button
            label="ثبت نام"
            className="register-button"
            onClick={() => setSignup(true)}
          />
          <Dialog
            header="فرم ثبت نام"
            visible={signup}
            style={{ width: "50vw" }}
            onHide={() => setSignup(false)}
          >
            <Register />
          </Dialog>
        </li>
      </ul>

      {/* <nav>
                <ul>

                    <li>
                        <Link to="/new-product">محصول جدید</Link>
                    </li>
                    <li>
                        <Link to="/">همه محصولات</Link>
                    </li>
                </ul>
            </nav> */}

      
        <div className="logo">
        <Link to="/">
          <ul>
            <li style={{ marginTop: "15px" }}>
            <img src={ require('../logo_fin.png') } />
            </li>
            <li>
            <p>
            فروشگاه زیبا
            </p>
            </li>
            </ul>
            </Link>
            </div>
     
    </header>
  );
}

export default MainNavigation;
