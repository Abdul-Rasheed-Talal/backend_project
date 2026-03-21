const asyncHandler= (requestHandler)=>{
   return (req, res , next)=>{
        Promise.resolve(requestHandler(req , res , next))
        .catch((err)=> next(err))
    }
}

export {asyncHandler}


// We can also do the above method as this below
// const asyncHandler = (fn) => async(req , res , next)=>{
//     try {
//         await fn(req , res , next)
//     } catch (error) {
//         res.status(err.code|| 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }