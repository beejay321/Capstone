import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Dashboard from "./components/DashBoard";
import DetailPage from "./components/detailPage";
import Register from "./components/Register";
import UpdateProfile from "./components/UpdateProfile";
import CreateService from "./components/CreateService";
import MyOrders from "./components/MyOrders";
import MyProfile from "./components/MyProfile";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" render={(routerProps) => <Dashboard />} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/login" render={(routerProps) => <Login />} />
        <Route path="/register" render={(routerProps) => <Register />} />
        <Route path="/updateProfile" render={(routerProps) => <UpdateProfile />} />
        <Route path="/createService" render={(routerProps) => <CreateService />} />
        <Route path="/MyProfile" render={(routerProps) => <MyProfile />} />
        <Route path="/myOrders" render={(routerProps) => <MyOrders />} />
        <Route render={(routerProps) => <DetailPage title="DETAILS" {...routerProps} />} path="/details/:projectId" />
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
