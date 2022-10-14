import React, {useState} from 'react'
import './Tweet.css'
import Avatar from './Avatar.js'
import TwitterHeader from './TwitterHeader.js'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswerRounded';
import LoopIcon from '@material-ui/icons/LoopRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import Cookies from 'js-cookie';

function Tweet({tweet_id, name, handle, profile_img, text}) {
    const [likeState, setLikeState] = useState(false);

    const likeElement = () => {
      console.log("Like function");
      setLikeState(!likeState);
      var status = "Liked"
      if (likeState) {
          status = "Dislike"
      }
      fetch("http://localhost:5000/postLogInfo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Timestamp: new Date().getTime(),
            UserID: Cookies.get('userID'),
            SessionID: Cookies.get('sessionID'),
            ActionID: status,
            ActionDescription: tweet_id
          })
        });
    }

    const onHover = () => {
        console.log("Hovering over:", tweet_id);
        fetch("http://localhost:5000/postLogInfo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Timestamp: new Date().getTime(),
            UserID: Cookies.get('userID'),
            SessionID: Cookies.get('sessionID'),
            ActionID: "Hover",
            ActionDescription: tweet_id
          })
        });
      };
    return (
        <div className="tweet" onMouseEnter={onHover.bind(this)}>
            <div className="tweet__avatar"><Avatar user_avatar={profile_img}/></div>
            <div className="tweet__information">
                <div className="tweet__information__header"><TwitterHeader name={name} handle={handle} date="June 3" /></div>
                <p>{text}</p>
                <div className="tweet__interaction">
                    <QuestionAnswerIcon className="tweet__qa"/>
                    <LoopIcon className="tweet__rt" /> 
                    {likeState ? <img src="liked.png" onMouseDown={likeElement} className="tweet__fav" alt="Liked" /> : <img src="not_liked.png" onMouseDown={likeElement} className="tweet__fav" alt="Not liked" />} 
                    <ShareRoundedIcon className="tweet__share" />
                </div>
            </div>
        </div>
    )
}

export default Tweet
