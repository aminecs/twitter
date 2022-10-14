import React, {useState} from 'react'
import './Home.css'
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Cookies from 'js-cookie';

function Home() {
    const [user_id, setUser_id] = useState("");
    const [session_id, setSession_id] = useState("");

    const submit = () => {
        fetch("http://localhost:5000/createLogFile", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Timestamp: new Date().getTime(),
            UserID: Cookies.get('userID'),
            SessionID: Cookies.get('sessionID'),
          })
        });
      };

    const handleSubmit = () => {
        console.log("Setting cookies");
        Cookies.set("userID", user_id);
        Cookies.set("sessionID", session_id);
        submit()
    }

    return (
        <div className="home">
            <div className="login">
            <div className="login__description"><h2>Welcome to this Twitter-based experiment</h2></div>
            <form className="login__form">
                <input type="text" name="username" placeholder="Username" onChange={e => setUser_id(e.target.value)}/><br/>
                <input type="text" name="sessionID" placeholder="Topic number" onChange={e => setSession_id(e.target.value)}/><br/>
                <Button component={Link} to="/timeline"  variant="outlined" className="button" onClick={handleSubmit.bind(this)}>Submit</Button>
            </form>
            </div>
        </div>
    )
}

export default Home
