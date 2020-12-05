import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"; //helps API to talk to react
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); //instantiating the web api library and making it ready to be used

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); //This can be used to pull out variable values from dataLayer at any point in time

  useEffect(() => {
    //useEffect to run a function when a component is refreshed
    const hash = getTokenFromUrl();
    window.location.hash = ""; //For Security purposes                                 //Clearing up the url field
    const _token = hash.access_token; //_variable_name is a convention for temporary ariable
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token); //this 'spotify' is the instance which is a mediator between API and the react webapp
      spotify.getMe().then((user) => {
        //The Listener for this dispatch exists in reeducer
        dispatch({
          type: "SET_USER",
          user: user, //Setting the user in Data-layer obtained from spotify.getMe()
        });        
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcMInePcaKS8p').then( (response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });  
    }
  }, []);

  //Extracting[pulling] the user-name from the current  data-layer-state
  // console.log('I am ...-> ' + user);                                                //spotify.getMe() returns a promise
  // console.log('The token returned is ..->  ',token);
  return (
    <div className="App">
      {/**Login page */}
      {token ? (
        /*If there is a token then log-in otherwise redirect ot Login Page */
        <Player spotify={spotify} /> //Passing the spotify object to access api from Player component
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
