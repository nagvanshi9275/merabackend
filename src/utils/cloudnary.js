

import {v2 as cloudinary} from 'cloudinary';

import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDNARAY_CLOUD_NAME, 
    api_key: process.env.CLOUDNARAY_API_KEY, 
    api_secret: process.env.CLOUDNARAY_API_SECRET // Click 'View Credentials' below to copy your API secret
});





      // for uploading file

      // inside this function we have passes a parameter called local file file path

      const uploadoncloudnary = async (LocalfilePath) => {


              // because this method take time so use try catch

              try {
  
                // check localpath or not

                if(!LocalfilePath) return null


                // for upload

              const response = await  cloudinary.uploader.upload(LocalfilePath, {

                  resource_type: "auto"


                })

              console.log("file is uploaded on cloudinary", response.url)

              return response
                
              } catch (error) {

                fs.unlinkSync(LocalfilePath)

             return null;

                
              }

       


      }







   export {uploadoncloudnary}













