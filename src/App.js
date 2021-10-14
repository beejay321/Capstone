import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/DashBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Route path="/" exact component={LandingPage} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/dashboard" render={(routerProps) => <Dashboard {...routerProps} />} />

        <Footer />
      </Router>
    </>
  );
}

export default App;
