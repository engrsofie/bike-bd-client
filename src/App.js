import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddEvents from "./Components/AddEvents/AddEvents";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import CheckOut from "./Components/CheckOut/CheckOut";
import List from "./Components/List/List";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";
export const UserContext = createContext();

export const EmailUserContext = createContext();

export default function BasicExample() {

  const [emailUser, setEmailUser] = useState([]);
  const [signedInUser, setSignedInUser] = useState({});

  return (
    <EmailUserContext.Provider value={[emailUser, setEmailUser]}>
      <UserContext.Provider value={[signedInUser, setSignedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addEvents">
              <AddEvents />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <List />
            </PrivateRoute>
            <Route path="/dashboard"></Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </EmailUserContext.Provider>
  );
}

