const MONGOOSE =require('mongoose');
const SCHEMA = MONGOOSE.Schema;

const userShema= new Schema({
    username:String,
    password:{type: String, unique:false, uppercase:true, required: true}
});
module.exports= MONGOOSE.model('user',userSchema);