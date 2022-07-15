import React from "react";
import { Form, Row,  Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./register.module.css";

const Login = ({ firstname, lastname, email, password, setSurname, setFirstName, setEmail, setPassword, register, title, setShowLogin }) => {
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.title}>
          <div>
            <Image src="https://res.cloudinary.com/dvyids286/image/upload/v1633950808/Capstone/sqpxzpmoq4nq0hpcbjpc.jpg" height="80" roundedCircle />
            <h4 className="">{title}</h4>
          </div>
        </div>
        {title === "Signup" && (
          <div className="mb-3 px-5">
            <Form.Group className="mb-3" controlId="name">
              <Form.Control className={styles.loginInput} id="username" required value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" />
              <Form.Control.Feedback type="invalid">First Name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control className={styles.loginInput} id="username" required value={lastname} onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Surname" />
              <Form.Control.Feedback type="invalid">Surname</Form.Control.Feedback>
            </Form.Group>
          </div>
        )}
        <div className="mb-5 px-5">
          <Form.Group className="mb-3" controlId="email">
            <Form.Control className={styles.loginInput} id="username" required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" />
            <Form.Control.Feedback type="invalid">Please enter your email address</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4" controlId="password">
            <Form.Control className={styles.loginInput} id="password" required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="d-grid gap-2 mb-5 px-5">
          {/* disabled={user.username.length < 1 && user.password.length < 1 ? true : false} */}
          <Button className={styles.loginButton} variant="primary" size="lg" type="button" onClick={register}>
            {title}
          </Button>
        </div>

        <Row className="d-grid gap-2 justify-content-md-center mb-2">
          <Link to="/" className={styles.loginformlink}>
            <p>Forgot your password?</p>
          </Link>{" "}
        </Row>

        {title === "Signup" ? (
          <div className="d-grid gap-2 justify-content-md-center mb-2" onClick={() => setShowLogin(true)}>
            <p className={styles.loginformtext}>Back to login page </p>
          </div>
        ) : (
          <Row className="d-grid gap-2 justify-content-md-center mb-2">
            <p className={styles.loginformtext}>
              Create a new account
              <span className="m-1 ">
                <Button className="ml-3" variant="outline-success" size="lg" type="button" onClick={() => setShowLogin(false)}>
                  here{" "}
                </Button>
              </span>
            </p>
          </Row>
        )}
      </div>
    </>
  );
};
export default Login;
