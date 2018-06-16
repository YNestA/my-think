/**
 * Created by yang on 18-5-30.
 */
module.exports=options=>{
    return (ctx,next)=>{
        console.log(new Date().toLocaleString());
        return next();
    }
}
