import React, { useEffect, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import "./Messages.js.css";
import Message from './Message';

const Messages = ({ messages, name }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <ScrollToBottom mode='bottom' className="messages" followButtonClassName='custom-scroll-button'>
            <div className="messagesContainer">
                {messages.map((message, index) => (
                    <Message key={index} message={message} name={name} />
                ))}
                <div ref={messagesEndRef} />
            </div>
        </ScrollToBottom>
    );
}

export default Messages;
