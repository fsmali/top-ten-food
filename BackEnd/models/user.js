import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum:["admin","user"], default:"user"},
  });

   export default mongoose.model("User", userSchema)