import React from 'react';
import Routes from "../routes";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{maxWidth: '800px'}}>
                    <Nav/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
