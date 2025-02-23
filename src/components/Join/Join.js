import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import "./Join.css"

const notify = () => toast.error("Please fill all the credentials...",{
  duration:1000,
  position:'top-center',
  style: {
    right: 0
  }
});

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='text-3xl heading neuefont'>Join</h1>
        <form>
        <div>
          <input placeholder="Enter your name" type="text" value={name} onChange={(event) => {
            setName(event.target.value)
          }} className='joinInput mt-20' />
        </div>
        <div>
          <input placeholder="Enter your room" type="text" value={room} onChange={(event) => {
            setRoom(event.target.value)
          }} className='joinInput mt-20' />
        </div>
        <Link onClick={(event)=>{
          if (name === "" || room === "") {
            event.preventDefault()
            notify()
          }
        }} to={`/chat?name=${name}&room=${room}`}>
          <button className='neuefont button mt-20'>Sign In</button>
          <Toaster />
        </Link>
        </form>
        
      </div>
    </div >
  )
}

export default Join