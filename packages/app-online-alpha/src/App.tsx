import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {FrontPage} from "./pages/FrontPage";
import {UserPage} from "./pages/UserPage";
import {Grid, GridContainer, GridContent} from "@opr-finance/component-grid/lib";

const App: React.FC = () => {
    return (
        <Router>
            <GridContainer>
                <Grid>
                    <Link to={"/"}>Front</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/user/1"}>User</Link>
                </Grid>
            </GridContainer>
            <Route path="/" exact component={FrontPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/user/:id" component={UserPage} />
            <GridContainer>
                <Grid width={1/3}>
                    <GridContent>
                        Footer A
                    </GridContent>
                </Grid>
                <Grid width={1/3}>
                    <GridContent>
                        Footer B
                    </GridContent>
                </Grid>
                <Grid width={1/3}>
                    <GridContent>
                        Footer C
                    </GridContent>
                </Grid>
            </GridContainer>
        </Router>
    );
}

export default App;
