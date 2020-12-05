import React from 'react'
import './SideBar.css'
import SideBarOption from './SideBarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from './DataLayer'

function SideBar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="side_bar">
            <img 
             className="side_bar_logo"
             src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
             <SideBarOption title="Home" Icon={HomeIcon} />
             <SideBarOption title="Search" Icon={SearchIcon}/>
             <SideBarOption title="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist => (
                <SideBarOption title={playlist.name}/>                
            ))};
        </div>
    )
}

export default SideBar
