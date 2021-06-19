import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { useRouteMatch } from 'react-router';
import AddEvents from '../AddEvents/AddEvents'
import ManageProduct from '../ManageProduct/ManageProduct'
import './Admin.css'

const Admin = () => {

    let { path, url } = useRouteMatch();

    return (
      <div className="row">
        {/* Left side */}
        <div className="col-md-3  text-white h-100 ">
          <div className="left left-menu">
            <Link className="menus" to={`${url}/addProduct`}>
              Add products
            </Link>{" "}
            <br />
            <Link className="menus" to={`${url}/manageProduct`}>
              Manage products
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className="col-md-9">
          <Switch>
            <Route exact path={path}>
              <div className="container w-50">
                <AddEvents />
              </div>
            </Route>
            <Route path={`${path}/addProduct`}>
              <div className="container w-50">
                <AddEvents />
              </div>
            </Route>
            <Route path={`${path}/manageProduct`}>
              <ManageProduct />
            </Route>
          </Switch>
        </div>
      </div>
    );
};

export default Admin;