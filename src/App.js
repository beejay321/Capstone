import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Dashboard from "./components/DashBoard";
import DetailPage from "./components/detailPage";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" exact render={(routerProps) => <Login />} />
        <Route path="/register" exact render={(routerProps) => <Register />} />
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
