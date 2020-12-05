import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img 
                className="footer_album_logo"
                src="https://media1.santabanta.com/full1/Pollywood%20Movies/Sufna/sufna-2v.jpg" 
                alt=""/>
                <div className="footer_songInfo">    
                    <h4>Song </h4>
                    <p>Artist</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green point"/>
                <SkipPreviousIcon className="footer_icon point"/>
                <PlayCircleOutlineIcon fontSize="large" className="point"/>
                <SkipNextIcon className="footer_icon point"/>
                <RepeatIcon className="footer_green point"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon  className="point"/>    
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="point"/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
        
            </div>
        </div>
    )
}

export default Footer
