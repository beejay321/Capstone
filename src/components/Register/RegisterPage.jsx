import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
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
        const json = await res.json();
        console.log(json);
        localStorage.setItem("accessToken", json.accessToken);
        localStorage.setItem("refreshToken", json.refreshToken);
        localStorage.setItem("username", json.username);
        localStorage.setItem("id", json._id);
        alert("successfully logged in");
        props.history.push("/dashboard");
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
        <div className={styles.loginContainer}>
          {/* <Container className={styles.loginContainer}> */}
          <Col xs={7} md={5}>
            <Form className={styles.loginBox}>
              {showLogin ? (
                <Login setShowLogin={setShowLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} register={login} title="Login" />
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
                  title="Signup"
                />
              )}
              <Row></Row>
            </Form>
          </Col>
          {/* </Container> */}
        </div>
      </div>{" "}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
