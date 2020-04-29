import React from 'react';

function Dashboard(props) {
    console.log("Dashboard props", props);
    return (
        <div className="App">
            <h2>I'm the dashboard.</h2>
            <p>You love me &lt;3 </p>
        </div>
    );
}

export default Dashboard;
