import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar.js";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Dashboard from './components/PlantContainer'
import PlantForm from './components/PlantForm'
import "./app.css";
import "./index.css";

function App() {
    return (
        <div className="App">
            <NavigationBar />

            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/signup">
                    <Signup />
                </Route>

                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>

                <PrivateRoute path="/plant-form">
                    <PlantForm />
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default App;
