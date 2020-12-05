/*
https://levelup.gitconnected.com/a-guide-to-service-workers-in-react-js-82aec1d6a22d
Road-Map:---

 **User Authentication
 **Spotify API -- real time details being pushed
 **Responsive Design - Material UI
 **React Context API [ similar to REDUX]
 **Modern React {{ Hooks, State}}
 **Host on Firebase
 Client ID      fbacea564ed04123bc3146d35312ba4d
=>Docs: https://developer.spotify.com/documentation/general/guides/scopes/

 spotify-web-api-js is a npm package used to interact with the spotify api
=>Docs:  https://www.npmjs.com/package/spotify-web-api-js


|| React-App ||  <<====>>  || spotify-web-api--js {instance}[node package /wrapper like mongoose] ||  <<====>>  || spotify-API ||


##Data-Layer:---

                        App
                         |
                         v
           Player     ,     Login
             |                |
             v                v
      sideBar,Header...


      Now App-Drilling is a problem because it makes difficult to changes in code without breaking other pieces 
      As in such scenario we refer child components as 
      app.player.sidebar.favourites  => 
      which is not a production ready code
 
      Redux/React-Context-Api
      just introduces a stack from where any prop can be addressed directly 
      without accessing through parent props
*/  