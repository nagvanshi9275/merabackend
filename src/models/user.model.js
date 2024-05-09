





import { Mongoose, Schema } from "mongoose";

// Define userSchema


const userSchema = new Schema(
    
      {

      username:{

        type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
         index: true // if you done that then that database use for searching for enable search feature we done this



      },


      email:{

        type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
        



      },

      fullName:{

        type: String,
         required: true,
         trim: true,
         index: true



      },

       Avataar:{

        type: String,
         required: true,
         
        



      },

      coverImage:{

        type: String,


      },

       watchHistory:[

         {

          type: Schema.Types.ObjectId,
          ref: "Video"




         }






       ],

       password:{

        type: String,
        required: [true, 'password is required']



       },

       refreshToken:{

           type: String



       }





    





     },

     {

      timestamps: true


     }




)



// now lets export this 


export const User = Mongoose.model("User", userSchema)




