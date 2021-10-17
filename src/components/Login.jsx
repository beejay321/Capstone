import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
        <div className="loginContainer">
          <Container className=" d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Col xs={7} md={5}>
              <Form className="pt-5 pb-2 px-4  loginBox">
                {/* <div className="mb-2 pt-4 d-flex justify-content-md-center">
                  <Image src="https://via.placeholder.com/100" height="100" roundedCircle />
                </div> */}
                <div className="d-flex justify-content-md-center">
                  <h4 className="">Log in</h4>
                </div>
                <div className="d-flex justify-content-md-center">
                  <p className=" loginformtext  text-muted">Simple. Secure. Reliable services</p>
                </div>

                <Form.Group className="mb-3 " controlId="username">
                  <Form.Label className=" loginformLabel">Email address</Form.Label>
                  <Form.Control className="loginInput" id="username" required value={this.state.user.username} onChange={this.handleChange} type="text" placeholder="Email Address" />
                  <Form.Control.Feedback type="invalid">Please enter your email address</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
                  <Form.Label className="loginformLabel">Password</Form.Label>

                  <Form.Control className="loginInput" id="password" required value={this.state.user.password} onChange={this.handleChange} type="password" placeholder="Password" />
                  <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2 mb-4">
                  <Button
                    className=" loginButton d-grid gap-2 "
                    variant="primary"
                    size="lg"
                    type="button"
                    onClick={(this.props.isLogged(this.state.user), this.login())}
                    // disabled={username.length < 0 && password.length < 0 ? true : false}
                  >
                    Login
                  </Button>
                </div>
                <Row className=" loginformtext d-grid justify-content-md-center mb-2">
                  <p>By joining I agree to receive emails from my site</p>
                </Row>
                <Row className="d-grid gap-2 justify-content-md-center mb-2">
                  <Link to="/" className="loginformlink ">
                    <p>Forgot your password?</p>
                  </Link>{" "}
                </Row>

                <Row className="d-grid gap-2 justify-content-md-center mb-2">
                  <p className="loginformtext ">
                    You don't have an account? Signup
                    <span className="m-1 ">
                      <Link to="/signup">
                        <Button className="ml-3" variant="outline-success" size="lg" type="button">
                          here{" "}
                        </Button>
                      </Link>
                    </span>
                  </p>
                </Row>
              </Form>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
