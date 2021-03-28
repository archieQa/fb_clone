import { Avatar } from '@material-ui/core';
import React from 'react'
import "./post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Post({profilePic, image, username , timestamp , message }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar"/> 
                <h3>{username}</h3>
                <p>{timestamp}</p>
                </div>
            

             <div className="post__bottom">
             <p>{message}</p>
             </div>
             <div className="post__image">
                 <img src={image} alt='' />
             </div>
             <div className="post__option">
              <div className="post__options">
                <ThumbUpIcon /> 
                 <p>Like</p>

              </div>
              
              <div className="post__options">
                <ChatBubbleOutlineIcon /> 
                 <p>Comment</p>

              </div>
              
              <div className="post__options">
                <NearMeIcon /> 
                 <p>Share</p>

              </div>
              
              <div className="post__options">
                <ExpandMoreIcon /> 
                <AccountCircleIcon /> 

              </div>
             </div>
        </div> 
    )
}

export default Post
