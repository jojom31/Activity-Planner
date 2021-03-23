//*import React, { Fragment } from "react";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import Activities from "./Activities"
//import LoginForm from "./LoginForm";
//import SignUp from "./SignUp";



const App = () => {
    return (
        <Router>
            <main>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/SignUp">Profile</Link></li>
                        <li><Link to="/LoginForm">Edit Profile</Link></li>
                    </ul>
                </nav>
                <Switch>
                <Route path="/" exact component={Activities} />
                <Route path="/profile" component={SignUp} />
                <Route path="/edit profile" component={LoginForm} />
                </Switch>
            </main>
        </Router>
            
    );
}

const Home = () => (
    <Fragment>
        <h1>Home</h1>
    </Fragment>
);

const Profile = () => (
    <Fragment>
        <h1>Profile</h1>
    </Fragment>
);

const EditProfile = () => (
    <Fragment>
        <h1>Edit Profile</h1>
    </Fragment>
);
export default App