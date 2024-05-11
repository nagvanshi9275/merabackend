





import mongoose , {  Schema } from "mongoose";

import jwt from "jsonwebtoken"

import bcrypt from "bcrypt"

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






userSchema.pre('save', async function(next){

  //which one you want to encrypt

  if(!this.isModified("password")) return next()

  this.password = bcrypt.hash(this.password, 10)


  next()



})


// right now we have stored the password in form of encrypted formate inside the database 

// but i want check the user write password is same as they storeed in database


userSchema.methods.isPasswordCorrect = async function (password) {


     return await bcrypt.compare(password, this.password)

  
}


userSchema.methods.generateAccessToken = function () {

 return jwt.sign(


        {

         _id: this._id,
         email: this.email,
         username: this.username,
         fullName: this.fullName




        },

        process.env. ACCESS_TOKEN_SECRET,

        {

       expiresIn: process.env.ACCESS_TOKEN_EXPIRY



        }

         

  )



  
}

userSchema.methods.generateRefreshToken = function () {


  return jwt.sign(


    {

     _id: this._id,
     




    },

    process.env.REFRESH_TOKEN_SECRET,

    {

   expiresIn: process.env.REFRESH_TOKEN_Expiry



    }

     

)









  
}



export const User = mongoose.model("User", userSchema)




