const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://disha:DKMongo%407555@cluster0.ssh4wdp.mongodb.net/ContactForm")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile_no:{
        type:String,
        required:true
    }

})

const ContactCollection=new mongoose.model('ContactCollection',contactSchema)

module.exports=ContactCollection