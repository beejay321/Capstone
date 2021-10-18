import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import Dashboard from "./components/DashBoard";
import PostProject from "./components/postProjects";
import DetailPage from "./components/detailPage";
import Checkout from "./components/checkout";
import ConfirmDetails from "./components/confirmDetails";
import Login from "./components/Login";
import MyProfile from "./profile/MyProfile.jsx";
// import UpdateProfile from "./components/UpdateProfile";
// import ChatBox from "./components/chatBox";

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Route path="/" exact component={LandingPage} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/faq" component={Faq} />
        <Route path="/dashboard" render={(routerProps) => <Dashboard {...routerProps} />} />
        <Route path="/postproject" render={(routerProps) => <PostProject {...routerProps} />} />
        <Route path="/login" render={(routerProps) => <Login {...routerProps} />} />
        <Route path="/details/:projectId" render={(routerProps) => <DetailPage title="DETAILS" {...routerProps} />} />
        <Route path="/checkout/:projectId/:bidId" render={(routerProps) => <Checkout {...routerProps} />} />
        <Route path="/confirmProjectDetails/:bidderId" render={(routerProps) => <ConfirmDetails {...routerProps} />} />
        <Route path="/users/:id" render={(routerProps) => <MyProfile {...routerProps} />} />
        {/* <Route path="/updateProfile" render={(routerProps) => <UpdateProfile {...routerProps} />} /> */}
        {/* <Route path="/chat" render={(routerProps) => <ChatBox {...routerProps} />} /> */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
