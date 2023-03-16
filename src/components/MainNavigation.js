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
  const [desktop, setDesktop] = useState(window.matchMedia("(min-width: 768px)").matches);

  return (
    <header className="header">
      <ul className="login">
        <li>
          <Button
            label="Login"
            className="login-button"
            onClick={() => setLogin(true)}
          />{" "}
          &nbsp;
          <Dialog
            header="Login Form"
            visible={login}
            style={{ width : !desktop ? "80%" : "50%" }}
            onHide={() => setLogin(false)}
          >
            <div>
              <ul className="add_product_field">
                <li className="label">
                  <label htmlFor="username">Username</label>
                </li>
                <li>
                  {" "}
                  <InputText id="username" />
                </li>
              </ul>

              <div style={{ marginTop: "2rem" }}>
                <ul className="add_product_field">
                  <li className="label">
                    <label htmlFor="password">Password</label>
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
                    label="Login"
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
            label="Register"
            className="register-button"
            onClick={() => setSignup(true)}
          />
          <Dialog
            header="Register Form"
            visible={signup}
            style={{ width : !desktop ? "80%" : "50%" }}
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
          <li>
            <p className="logo-text">
            Lavendar Shop
            </p>
            </li>
            <li className="logo-image" >
            <img src={ require('../logo_fin.png') } />
            </li>
            
            </ul>
            </Link>
            </div>
     
    </header>
  );
}

export default MainNavigation;
