import React from 'react'

const Message =({message, name}) => {
    let isSentByCurrentUser = false;
    let trimmedUser = name.split(" ").join("").toLowerCase()
    if (trimmedUser === message.user) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser ? (
            <div className="message userMsg">
                <div className="name neuefont userName">You</div>
                <div className="text userTxt">{message.text}</div>
            </div>
        ) : (
            <div className="message">
                <div className="text">{message.text}</div>
                <div className="name neuefont">{message.user}</div>
            </div>
        )
    )
}

export default Message