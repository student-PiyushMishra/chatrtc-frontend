import React from "react";
import { RiUserLocationLine } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


import "./InfoBar.js.css"

const InfoBar = ({ room }) => {
    const navigate = useNavigate();
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
            <RiUserLocationLine className="onlineIcon"/>
            <div className="room inline neuefont">{room}</div>
            </div>
            <div className="rightInnerContainer">
                <IoCloseCircleSharp className="close" onClick={()=>{
                    navigate('/')
                }}/>
            </div>
        </div>
    )
}

export default InfoBar