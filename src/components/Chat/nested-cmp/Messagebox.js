import React from 'react';

import "./Messagebox.js.css"

const Messagebox = ({message, setMessage, sendMessage}) => {
    return (
        <form className="messagebox" onSubmit={(event)=>{
            event.preventDefault()
        }}>
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(event) => { setMessage(event.target.value) }}
                onKeyDown={(event) => event.key === "Enter" ? sendMessage(event) : null}
            />
            <div className="send">
                <button onClick={(event)=>{
                    sendMessage(event);
                }}>
                    <i class="ri-send-plane-2-fill"></i>
                </button>
            </div>
        </form>
    )
}

export default Messagebox