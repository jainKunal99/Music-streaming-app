import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

//Application Config
const app = express();
const port = process.env.PORT || 8001;
//const connection_url = ;

//middlewares
app.use(express.json());
app.use(Cors());

//Initial Get Route
app.get('/',(req ,res)=> {
    res.status(200).send("Hello From Server file => Spotify Clone");
});

//Routes


//Listen for app on port 8001
app.listen(port, ()=> console.log('Listening to Spotify music Streaming on port '));
