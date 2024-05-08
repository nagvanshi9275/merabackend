


import mongoose from "mongoose";

import { DB_Name } from "./constants.js";

import express from "express";

  import connect_db from "./db/index.js";

  import dotenv from "dotenv";


   dotenv.config({
    
    path: './env'

    


   })




   connect_db()

    .then(() => {

       app.listen(process.env.PORT || 8000, () => {

          
          console.log(`App is running at ${process.env.PORT}`);




       })




    })

   
        

        .catch(err =>  {

             console.log("You have an error here is error message!!!", err)


        })
   



   


/*
const app = express();



(async () => {


    try {

        mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)

      app.on((error) => {

        console.log( error)

        throw error;

      })

      app.listen(process.env.PORT, () => {


          console.log(`app is running on ${PORT}`)




      })


        
    } catch (error) {

        console.log("Error:", error);

        throw error;
        
    }








})()



*/





















