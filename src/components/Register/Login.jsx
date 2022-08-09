import React from "react";
import { Form, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./register.module.css";

const Login = ({ firstname, lastname, email, password, setSurname, setFirstName, setEmail, setPassword, register, title, setShowLogin }) => {
  return (
    <>
      <div className={styles.formDiv}>
        <div className={styles.title}>
          {/* <div> */}
            <span className="">{title}</span>
          {/* </div> */}
        </div>
        {title === "Sign Up" && (
          <div className="">
            <Form.Group className="mb-3" controlId="name">
              <Form.Control className={styles.postInput} id="username" required value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" />
              <Form.Control.Feedback type="invalid">First Name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control className={styles.postInput} id="username" required value={lastname} onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Surname" />
              <Form.Control.Feedback type="invalid">Surname</Form.Control.Feedback>
            </Form.Group>
          </div>
        )}
        <div>
          <Form.Control className={styles.postInput} required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" />
          <Form.Control className={styles.postInput} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
        </div>
        <div className="d-flex gap-2 justify-content-md-between mb-2">
          <Form>
            <div className={styles.loginformCheck}>
              <Form.Check type="checkbox">
                <Form.Check.Input className={styles.loginformCheck} type="checkbox" isValid />
                <Form.Check.Label className={styles.loginformlink}>Remember me?</Form.Check.Label>
              </Form.Check>
            </div>
          </Form>
          <Link to="/" className={styles.loginformlink}>
            <p>Forgot your password?</p>
          </Link>{" "}
        </div>
        <div className={styles.loginButtonDiv}>
          <Button className={styles.loginButton} type="button" onClick={register}>
            {title}
          </Button>
        </div>
        <div>
          {title === "Sign Up" ? (
            <div className="d-grid gap-2 justify-content-md-center mb-2" onClick={() => setShowLogin(true)}>
              <p className={styles.loginformtext}>Back to login page </p>
            </div>
          ) : (
            <div className="d-grid gap-2 justify-content-md-center mb-2">
              <p className={styles.loginformtext}>
                New here?
                <span className={styles.newAcc} size="lg" type="span" onClick={() => setShowLogin(false)}>
                  Create a new account
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Login;
