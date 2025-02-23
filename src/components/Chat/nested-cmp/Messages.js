import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import "./Messages.js.css";
import Message from './Message';

const Messages = ({messages, name}) => {
    return (
        <ScrollToBottom className="messages" followButtonClassName='custom-scroll-button'>
            <div className="messagesContainer">
                {
                    messages.map((message, index) => {
                        return (
                            <Message key={index} message={message} name={name}/>
                        )
                    })
                }

            </div>
        </ScrollToBottom>

    )
}

export default Messages;