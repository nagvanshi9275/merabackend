


// basically inside this file i create a wrapper and then i i ceate a function every time 

// when i need i call this function again and again lets  see.


export {asynchandler}


const asynchandler = (fun) =>  async(req, res, next) => {

    try {

        await fun(req, res, next)
        
    } catch (error) {

        res.status(err.code || 500).json({
          
            success: false,
            message: err.message

        })
        
    }


}

                 

           













