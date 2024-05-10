


import {Schema, mongoose} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoschema = new  Schema(
    
    
    
    {

     videoFiles: {

     type: String,

     required: true,



     },


       thumbnail: {
         
        type: String,
        required: true,



       },


       title: {
         
        type: String,
        required: true,



       },

       Description: {
         
        type: String,
        required: true,



       },

       Durations: {
         
        type: Number,
        required: true,



       },

       
       Views: {
         
        type: Number,
        default: 0,



       },


       ispublished: {
         
        type: Boolean,
        required: true,
        default: true


       },


       Owner: {
         
        type: Schema.Types.ObjectId,
        ref: "User"



       },




    

    },

    {

     timestamps: true,
    }


)

videoschema.plugin(mongooseAggregatePaginate) // write your own plugin

export const Video = mongoose.model("Video", videoschema)









