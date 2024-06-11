import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar :{
    type:String,
    default:"https://lh3.googleusercontent.com/a/ACg8ocIp7Wx7PU-qlhogm2x7gDs0f_aCBkt49It2TufthZ8zcSlEN10=s96-c"   
},
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;
