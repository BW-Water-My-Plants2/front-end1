import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar.js";
import { Route, Link, Switch } from "react-router-dom";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Dashboard from './components/Userdashboard'
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
            </Switch>

            <Route path="/dashboard">
                <Dashboard />
            </Route>

            {/* {user.email != "" ? (
            <div className="welcome"> 
            <h2>
                welcome,<span>{user.name}</span>
            </h2>
            <button>LogOut</button>
            </div>
        ) : (
        
        )} */}
        </div>
    );
}

export default App;
