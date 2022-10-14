import React from 'react'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widgets from './Widgets.js'
import Cookies from 'js-cookie';

function Timeline() {
    const mouseMoved = (e) => {

        console.log("Sending coordinates:" + e.clientX + " " + e.clientY);
        fetch("http://localhost:5000/postMouseInfo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Timestamp: new Date().getTime(),
            UserID: Cookies.get('userID'),
            SessionID: Cookies.get('sessionID'),
            XCoordinates: e.clientX,
            YCoordinates: e.clientY
          })
        });
      }


    return (
        <div className="app__main" onMouseMove={mouseMoved}>
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}

export default Timeline
