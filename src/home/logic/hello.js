/**
 * Created by yang on 18-5-31.
 */
module.exports=class extends think.Logic{
    indexAction(){
    //    this.allowMethods='post';
        this.rules={
            name:{
    //            required:true,
                default:'world'
            }
        }
    }
};