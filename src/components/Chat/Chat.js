import {React, useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css';
import { useLocation, useNavigate } from 'react-router-dom';

import InfoBar from "./nested-cmp/InfoBar"
import { toast, Toaster } from 'react-hot-toast';
import Messagebox from './nested-cmp/Messagebox';
import Messages from './nested-cmp/Messages';

let socket;

const notify = (err) => toast.error(err,{
  duration:3000,
  position:'top-center',
});

const successify = (msg) => toast.success(msg,{
  duration:2000,
  position:'top-center'
})

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages,setMessages] = useState([]);
  const ENDPOINT = 'https://chatrtc-backend.onrender.com';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
  
    socket = io(ENDPOINT, {
      transports: ["websocket"],
    });
  
    socket.on("connect", () => {
      socket.emit('join',{name,room},(response)=>{
        successify(`Chat joined!`)
        if(response?.error){
          notify(response.error);
          navigate('/')
        }
      })
    });

    return () => {
      socket.disconnect();
    };
  }, [location.search]);
  
  useEffect(()=>{
    socket.on('message', message => {
      setMessages(existingMessages => [...existingMessages, message]);
    })
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [])

  const sendMessage = (event)=> {
    event.preventDefault();
    if(message){
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  return (
    <div className="outerContainer">
      <Toaster />
      <div className="container">
        <InfoBar room={room}/>
        <Messages messages={messages} name={name}/>
        <Messagebox message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  )
}

export default Chat