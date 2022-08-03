import React, { useState } from "react";
import { Alert, Image } from "react-bootstrap";
import { connect } from "react-redux";
import styles from "./register.module.css";

import { loggedInAction } from "../../redux/actions";
import Login from "./Login";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  isLogged: (user) => dispatch(loggedInAction(user)),
});
const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

function RegisterPage(props) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const loggedIn = () => {
    props.history.push("/");
  };

  const signup = async (e) => {
    try {
      const details = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      };
      const res = await fetch(`${MY_APP_API_URL}/users/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        localStorage.setItem("accessToken", json.accessToken);
        localStorage.setItem("refreshToken", json.refreshToken);
        localStorage.setItem("username", json.username);
        localStorage.setItem("id", json._id);
        alert("successfully registered");
        props.history.push("/");
      } else {
        console.log("there is an error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (e) => {
    try {
      const details = {
        email: email,
        password: password,
      };
      const res = await fetch(`${MY_APP_API_URL}/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      if (res.ok) {
        setShowAlert(true);
        const json = await res.json();
        console.log(json);
        localStorage.setItem("accessToken", json.accessToken);
        localStorage.setItem("refreshToken", json.refreshToken);
        localStorage.setItem("username", json.username);
        localStorage.setItem("id", json._id);
        // props.history.push("/");
      } else {
        console.log("there is an error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.registerDiv}>
        {showAlert && (
          <div className={styles.alert}>
            <Alert variant="success">
              <div className={styles.closeAlert} onClick={loggedIn}>
                <i class="bi bi-x-lg"></i>{" "}
              </div>
              You have successfully logged in
            </Alert>
          </div>
        )}

        <div className={styles.loginContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageDiv}>
              <div className="d-flex justify-content-center">
                <Image src="https://res.cloudinary.com/dvyids286/image/upload/v1659503066/CapstoneProjects/pauu3m1t0vh5lkff1dv2.png" height="200" roundedCircle />
              </div>
              <div className={styles.imageDivtext}>
                <div className="d-flex justify-content-center">Client Connect</div>
              </div>
            </div>{" "}
          </div>
          <div className={styles.loginBox}>
            {showLogin ? (
              <Login setShowLogin={setShowLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} register={login} title="Log In" />
            ) : (
              <Login
                firstname={firstname}
                lastname={lastname}
                setFirstName={setFirstName}
                setSurname={setSurname}
                setShowLogin={setShowLogin}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                register={signup}
                title="Sign Up"
              />
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
