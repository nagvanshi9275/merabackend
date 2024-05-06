


import mongoose from "mongoose";

import express from "express";

//import { DB_Name } from "../constants.js";

import { DB_Name } from "../constants.js";

 
 const connect_db = async () => {
    
    try {         
           
       const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
          
         console.log(`\n mongodb connected ${connectioninstance.connection.host}`)

    } catch (error) {      
           
          console.log("Error", error)        

        process.exit(1)               

                                
          
                          
    }     
      
 





 }


export  default connect_db;

















