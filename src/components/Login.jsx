import React, { useState } from "react";
import { Form, Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

import { loggedInAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  isLogged: (user) => dispatch(loggedInAction(user)),
});

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
    },
    // isLoggedIn: false,
  };

  // login = async (event) => {
  //   const form = event.currentTarget;
  //   try {
  //     const details = {
  //       email: this.state.user.username,
  //       password: this.state.user.password,
  //     };
  //     const res = await fetch(`http://localhost:3255/users/login`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(details),
  //     });

  //     if (res.ok) {
  //       const json = await res.json();
  //       console.log(json);
  //       localStorage.setItem("accessToken", json.accessToken);
  //       localStorage.setItem("refreshToken", json.refreshToken);
  //       localStorage.setItem("username", json.username);
  //       alert("successfully logged in");
  //       console.log(this.state.user);
  //       console.log(json);
  //       this.setState({ isLoggedIn: true });
  //       console.log(this.props);
  //       this.props.history.push("/dashboard");
  //       // this.routerProps.history.push("/dashboard");
  //     } else {
  //       alert("Credentials are incorrect");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert(error);
  //   }
  // };

  login = () => {
    try {
      if (this.props.isLoggedIn) {
        this.props.history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  handleChange = (e) => {
    let id = e.target.id;
    this.setState({
      ...this.state,
      user: { ...this.state.user, [id]: e.target.value },
    });
  };

  render() {
    return (
      <>
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Col xs={7} md={5}>
            <Form className="py-4 px-4  loginContainer">
              <div className="mb-2 d-flex justify-content-md-center">
                <Image src="https://via.placeholder.com/100" height="100" roundedCircle />
              </div>
              <div className="d-flex justify-content-md-center">
                <h4 className="">Log in</h4>{" "}
              </div>
              <div className="d-flex justify-content-md-center">
                <p className="text-muted">Simple. Secure. Reliable services</p>
              </div>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="username" required value={this.state.user.username} onChange={this.handleChange} type="text" placeholder="Email Address" />
                <Form.Control.Feedback type="invalid">Please enter your email address</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="password">
                <Form.Label>Password</Form.Label>

                <Form.Control id="password" required value={this.state.user.password} onChange={this.handleChange} type="password" placeholder="Password" />
                <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
              </Form.Group>
              <div className="d-grid gap-2 mb-4">
                <Button
                  className="d-grid gap-2 "
                  variant="primary"
                  size="lg"
                  type="button"
                  onClick={(this.props.isLogged(this.state.user), this.login())}
                  // disabled={username.length < 0 && password.length < 0 ? true : false}
                >
                  Login
                </Button>
              </div>
              <Row className="d-grid justify-content-md-center mb-2">
                <p>By joining I agree to receive emails from my site</p>
              </Row>
              <Row className="d-grid gap-2 justify-content-md-center mb-2">
                <Link to="/">
                  <p>Forgot your password?</p>
                </Link>{" "}
              </Row>

              <Row className="d-grid gap-2 justify-content-md-center mb-2">
                <p>
                  You don't have an account? Signup
                  <span className="m-1">
                    <Link to="/signup">
                      <Button className="ml-3" variant="success" size="lg" type="button">
                        here{" "}
                      </Button>
                    </Link>
                  </span>
                </p>
              </Row>
            </Form>
          </Col>
        </Container>
      </>
    );
  }
}
export default // Login;
connect(mapStateToProps, mapDispatchToProps)(Login);
