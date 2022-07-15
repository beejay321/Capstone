import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/HomePage/LandingPage";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import Dashboard from "./components/BrowseProjects/DashBoard";
import PostProject from "./components/postProjects";
import DetailPage from "./components/ShowDetail/DetailPage";
import Checkout from "./components/Checkout/Checkout";
import ConfirmDetails from "./components/confirmDetails";
import RegisterPage from "./components/Register/RegisterPage";
// import Messages from "./components/Message/Messages";
// import Login from "./components/Register/Login";
// import MyProfile from "./profile/MyProfile.jsx";
// import EditProject from "./components/ShowDetail/EditProject.jsx";
// import UpdateProfile from "./profile/UpdateProfile";

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
        {/* <Route path="/editproject/:projectId" render={(routerProps) => <EditProject {...routerProps} />} /> */}
        <Route path="/register" render={(routerProps) => <RegisterPage {...routerProps} />} />
        <Route path="/details/:projectId" render={(routerProps) => <DetailPage title="DETAILS" {...routerProps} />} />
        <Route path="/checkout/:projectId/:bidId" render={(routerProps) => <Checkout {...routerProps} />} />
        <Route path="/confirmProjectDetails/:bidderId" render={(routerProps) => <ConfirmDetails {...routerProps} />} />
        {/* <Route path="/users/:id" render={(routerProps) => <MyProfile {...routerProps} />} /> */}
        {/* <Route path="/updateProfile/:id" render={(routerProps) => <UpdateProfile {...routerProps} />} /> */}
        {/* <Route path="/me/messages" render={(routerProps) => <Messages {...routerProps} />} /> */}
        {/* <Route path="/chat" render={(routerProps) => <ChatBox {...routerProps} />} /> */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
