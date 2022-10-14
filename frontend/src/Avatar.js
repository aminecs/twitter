import React from 'react'
import "./Avatar.css"

function Avatar({user_avatar}) {
    return (
        <div className="avatar">
            <img src={user_avatar} alt="Avatar"></img>
        </div>
    )
}

export default Avatar
