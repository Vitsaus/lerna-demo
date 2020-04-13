import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {FrontPage} from "./pages/FrontPage";
import {UserPage} from "./pages/UserPage";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <div>
                    <Link to={"/"}>Front</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/user/1"}>User</Link>
                </div>
                <div>
                    <Route path="/" exact component={FrontPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/user/:id" component={UserPage} />
                </div>
                <div>
                    Footer
                </div>
            </div>
        </Router>
    );
}

export default App;
