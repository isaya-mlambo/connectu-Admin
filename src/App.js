import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.css";
import Hero from "./components/Hero";
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginForm from "./components/LoginForm/LoginForm";
import Vacancies from "./pages/Vacancies";
import Contract from "./pages/Contract";
import About from "./pages/About";
import Interview from "./pages/Interview"
import MotionHoc from "./pages/MotionHoc"
import { useAuth } from "./context/AuthContext";
import Sidebar from "./Sidebar/index";
import Home from "./pages/Home";


const App = () => {
  const { isLoading } = useAuth();
  return isLoading ? (
    <h1>hold on, loading...</h1>
  ) : (
    <Router>
      <Sidebar />

      <Switch>
        <Route path={ROUTES.HERO} component={Hero} />
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.LOGIN} component={LoginForm} />
        <Route path={ROUTES.VACANCIES} component={Vacancies} />
        <Route path={ROUTES.CONTRACT} component={Contract} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.INTERVIEW} component={Interview} />
        <Route path={ROUTES.MOTIONHOC} component={MotionHoc} />

        <PrivateRoute path={ROUTES.HERO}>
          <Hero />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
