import React from 'react'
import './SideBarOption.css'

function SideBarOption({title, Icon }) {
    return (
        <div className="side_bar_option">
            {Icon && <Icon className="sidebarOption_icon"/>}
            { Icon ? (<h4>{title}</h4>):(<p>{title}</p>)}
        </div>
    )
}

export default SideBarOption
