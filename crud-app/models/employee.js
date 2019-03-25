const mongoose=require('mongoose')
var url = process.env.DATABASE_URL || "mongodb://localhost:27017/Empoyee21"; 
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));
//mongoose.connect('localhost:27017/myEmployee',{useNewUrlParser: true});
var Schema=mongoose.Schema

const schema=new Schema({
    fullName:{type:String,required:true},
    email:{type:String},
    mobile:{type:String},
    city:{type:String}
}, {collection: 'employee'});
module.exports=mongoose.model('employee',schema)