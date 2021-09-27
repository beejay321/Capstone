import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Dashboard from "./components/DashBoard";
import DetailPage from "./components/detailPage";
import Register from "./components/Register";
import UpdateProfile from "./components/UpdateProfile";
import CreateService from "./components/CreateService";
import MyProfile from "./profile/MyProfile.jsx";
// import MyProjects from "./profile/myProjects.jsx";
import AboutUs from "./components/AboutUs";
import ChatBox from "./components/chatBox";
import Login from "./components/Login";
import Checkout from "./components/checkout";
import PostProject from "./components/postProjects";
import FreelancerProfile from "./profile/freelancerProfile";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [sellerLoggedIn, setSellerLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const login = async () => {
      try {
        // let response = await fetch(`http://localhost:3255/projects/${match.params.projectId}`);
        // console.log(response);
        // let result = await response.json();
        // console.log(result);
        // setUser("result");
      } catch (error) {
        console.log("error");
      }
    };
    login();
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" render={(routerProps) => <Dashboard {...routerProps} />} />
        <Route path="/details/:projectId" render={(routerProps) => <DetailPage title="DETAILS" {...routerProps} />} />
        <Route path="/freelancerProfile/:id" render={(routerProps) => <FreelancerProfile {...routerProps} />} />
        <Route path="/postproject" render={(routerProps) => <PostProject {...routerProps} />} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/login" render={(routerProps) => <Login LoggedIn={LoggedIn} {...routerProps} />} />
        <Route path="/register" render={(routerProps) => <Register LoggedIn={LoggedIn} {...routerProps} />} />
        <Route path="/updateProfile" render={(routerProps) => <UpdateProfile {...routerProps} />} />
        <Route path="/createService" render={(routerProps) => <CreateService {...routerProps} />} />
        <Route path="/users/me" render={(routerProps) => <MyProfile {...routerProps} />} />
        <Route path="/chat" render={(routerProps) => <ChatBox {...routerProps} />} />
        {/* <Route path="/myProjects" render={(routerProps) => <MyProjects {...routerProps} />} /> */}
        {/* <Route path="/myCart" render={(routerProps) => <MyCart {...routerProps} />} />
        <Route path="/checkout" render={(routerProps) => <Checkout {...routerProps} />} />*/}
        {/* <Login /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

{
  /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
        </header>
      </div> */
}
