import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FourmIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function header() {
    return (
        <div className="header">
            <div className="header__left"></div>
            <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
    <div className="header__input">
            <SearchIcon />
            <input placeholder='Search Facebook'  type="text" />
        </div>
        <div className="header__middle">
        <div className="header__option
             header__option--active ">
             <HomeIcon fontsize="large"/>
        </div> 
        <div className="header__option">
             <FlagIcon fontsize="large"/>
        </div> 
        <div className="header__option">
             <SubscriptionsOutlinedIcon fontsize="large"/>
        </div> 
        <div className="header__option">
             <StorefrontOutlinedIcon fontsize="large"/>
        </div> 
        <div className="header__option">
             <SupervisedUserCircleIcon fontsize="large"/>
        </div>      
                    
        </div>
            
            <div className="header__right">
            <div className="header__info">
                    <Avatar src="https://thumbs.dreamstime.com/b/fat-monkey-leader-lopburi-city-thailand-fat-monkey-leader-194866802.jpg" />
                    <h4>Luars Qamo</h4>
            </div>
        <IconButton>
        <AddIcon />  
        </IconButton>
        <IconButton>
          <FourmIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>

         </div>
        
        </div>
    )
}

export default header
