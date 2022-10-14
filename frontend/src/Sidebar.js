import React from 'react'
import SidebarMenu from './SidebarMenu.js'
import "./Sidebar.css"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExploreButton from './ExploreButton.js'

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__logo"/>
            <div className="sidebar__options">
                <SidebarMenu active Icon={HomeRoundedIcon} text="Home" />
                <SidebarMenu Icon={ExploreButton} text="Explore" />
                <SidebarMenu Icon={NotificationsRoundedIcon} text="Notifications" />
                <SidebarMenu Icon={MailOutlineRoundedIcon} text="Messages" />
                <SidebarMenu Icon={BookmarkBorderRoundedIcon} text="Bookmarks" />
                <SidebarMenu Icon={ListAltRoundedIcon} text="Lists" />
                <SidebarMenu Icon={PersonOutlineRoundedIcon} text="Profile" />
                <SidebarMenu Icon={MoreHorizRoundedIcon} text="More" />
            </div>
        </div>
        
    )
}

export default Sidebar
