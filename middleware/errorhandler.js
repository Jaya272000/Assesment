const errorhandler=(error,req,res,next)=>{
    res.status(error.status).json({message:error.message})
    next();

}
export default errorhandler;