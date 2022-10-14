import React, {useState, useEffect} from 'react';
import Tweet from './Tweet.js';
import './Feed.css';
import db from "./config";

function Feed() {
    const [posts,setPosts]= useState([]);
    const [start, setStart] = useState(3);
    const [isHidden, setIsHidden] = useState(true);
    const [waitIncrement, setWaitIncrement] = useState(0);
    const [incrementCounter, setIncrementCounter] = useState(0);

    const getUserData = () => {
        let ref = db.ref("/");
        ref.on("value", snapshot => {
          setPosts(snapshot.val().reverse());
        });
      };

    useEffect(()=>{
        getUserData();
    }, []);

    useEffect(() => {
      setTimeout(endOfTime, 600000);
    }, []);
    
    const endOfTime = () => {
      window.location.href = '/';
      alert("Time is over.");
    };

    useEffect(() => {
        var waitTime = 7000;
        console.log(waitTime); // Reports update time
        const interval = setInterval(() => {
            setIsHidden(false);
            setWaitIncrement(waitIncrement => waitIncrement + 10);
            setStart(start => {
              var tweets = document.getElementsByClassName("tweet")
              if (tweets.length){
                var height = document.getElementsByClassName("tweet")[0].getBoundingClientRect().height
                document.getElementsByClassName("feed__tweets")[0].scrollBy(0, -height*3)
              }
              return start + 3; // Three new tweets are added at every refresh
            });
            setIncrementCounter(incrementCounter => incrementCounter + 1);
            setWaitIncrement(0);
          }, waitTime);
          return () => clearInterval(interval)
    }, [isHidden, incrementCounter, waitIncrement]);

    return (
        <div className="feed">
            <div className="feed__bar"><h2>Home</h2>
            </div>
            <div className="feed__tweets">
            {   
                posts && posts.length>0 && posts.slice(-start).map((item) =>
                (<Tweet key={item.tweet_id} tweet_id={item.tweet_id} name={item.name} handle={item.screen_name} profile_img={item.profile_img} text={item.text}/>))
            }
            </div>
        </div>
    )
}

export default Feed
