import React from 'react';
import { Menu } from 'semantic-ui-react';
import Channels from "./Channels/Channels.component";
import FavouriteChannels from "./FavouriteChannels/FavouriteChannels.component";
//import PrivateChat from "./PrivateChat/PrivateChat.component";
import "./SideBar.css";
import UserInfo from "./UserInfo/UserInfo.component";

export const SideBar = () => {
    return (<Menu vertical fixed="left" borderless size="large" className="side_bar">
         <UserInfo />
        <FavouriteChannels />
        <Channels />
        {/* <PrivateChat />  */}
    </Menu>
    )
}