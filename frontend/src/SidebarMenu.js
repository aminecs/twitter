import React from 'react'
import './SidebarMenu.css'

function SidebarMenu({active, Icon, text}) {
    return (
        <div className={`sidebarMenu ${active && "sidebarMenu--active"}`}>
            <Icon /><h2>{text}</h2>
        </div>
    )
}

export default SidebarMenu
