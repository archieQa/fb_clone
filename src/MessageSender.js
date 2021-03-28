import { Avatar } from '@material-ui/core';
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";


function MessageSender() {
    const [ input , setInput] = useState("");
    const [ imageUrl , SetImageUrl] = useState("");

    const Handlesubmit = (e) => {
        e.preventDefault(); 

            

    };
    return (

    <div className="messageSender">
            <div className="messagesender__top">
             <Avatar />
             <form>
                 <input
                 value={input}
                 onChange={(e) => setInput(e.target.value)} 
                 className="messageSender__input"
                 placeholder ={"What's on your mind? "}
                 /> 
                 <input 
                 value={imageUrl}
                 onChange={(e) => SetImageUrl(e.target.value)} 

                 placeholder = {"Image URL"}
                 /> 
                <button OnClick={Handlesubmit} type="submit"/>
             </form>
            </div>
    <div className="messagesender__bottom ">
              
        <div className="message__option">
                   <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
        </div>
        <div className="message__option">
                      <PhotoLibraryIcon style={{ color: "green" }} />
                     <h3>Photo/Video</h3>
        </div>
        <div className="message__option">
                  <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Activity/Feeling</h3>
                  
         </div>
            
     </div>
            
    </div>
    )
}

export default MessageSender
