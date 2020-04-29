import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "./pages/Page-1";
import Page2 from "./pages/Page-2";
import Page3 from "./pages/Page-3";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/page-1" component={Page1}/>
                        <Route path="/page-2" component={Page2}/>
                        <Route path="/page-3" component={Page3}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;
