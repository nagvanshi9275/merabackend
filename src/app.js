



import express from "express";


 import cors from "cors";

 import cookieParser from "cookie-parser";




const app = express();


// now lets write configuration of cors 

//in express use method use for the middleware


app.use(cors({

    origin: process.env.CORS_Origin,
    credentials: true


}))


// now lets limit the amount of data that you have taken in json formate

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))  //here we write public because we have a folder called public 

// instead of that you can also write another name as well

app.use(cookieParser())

export {app}














