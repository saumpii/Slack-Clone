import React from 'react';
import "./Message.css";

function Message({message, timestamp, user, userImage}) {
    return (
        <div className="message">
            <img src={userImage} alt=""/>
            <div className="message_info">
                <h4>
                    {user} 
                    <span className="message_timestamp" >{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4> 
                <p>{message}</p>
            </div>
        </div>
    )
}

//You need to remember the date format.
//Optional Chaining a great way to solve problem message?.info = message && message.info done in one step.
export default Message
