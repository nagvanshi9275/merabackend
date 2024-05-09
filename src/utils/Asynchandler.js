








export {asyncHandler}


// this one is the very first and effective method for the create a wrapper and put the function inside of that


const asyncHandler = () => (fun) =>  async(res, req, next) => {

    try {

        await fun(res, req, next)
        
    } catch (error) {
    

      console.log(error.code || 500).json({


            /// for better communication with frontend developer

            success: false,

            message: err.message


      })



    }
     


}




