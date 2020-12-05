//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start///#endregion

export const authEndpoint = "https://accounts.spotify.com/authorize";       //Tells Spotify to take care of authentication Directs to API-authorization//
const redirectUri =  "http://localhost:3000/";                              //Redirects to base URL of the Webapp once authorized
const clientId    =  "fbacea564ed04123bc3146d35312ba4d";                    //ID obtained while getting permission to use the Spotify Id for them to track our requirements
const scopes = [                                                            //Meta-data about the information we actual need of the authorised user - defined as scopes                        
    "user-read-currently-playing",                                          //There are no DELETE scopes from the Spotify API and is not allowed
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    //capturing the url on returning back to localhost on successful authorization
    //.substring(1) means get the first string after split
    //.split(delimiter)
    //eg->  #accessToken=mySuperSecretKey&name=KunalJain
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
        // substring -> #accessToken=mySuperSecretKey reaches here
        let parts = item.split('=');
        //parts is a array => ['#accessToken', 'mySuperSecretKey']
        initial[parts[0]] = decodeURIComponent(parts[1]);  
        return initial;                                                     //access token grabbed----
    },{});
};

//   `` => This is called back-ticks and is used when we want some js and some variables in the same string
//in scopes.join("ASCII key of delimiter{space/comma,etc}")
//token is a string that is a proof of successful authentication
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
