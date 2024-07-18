import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  picture: {
    type: String,
  },
  addressLine1: { //rua
    type:String,
  },
  addressLine2: { //bairro
    type:String,
  },
  zipCode: { // cep
    type: String,
  },
  city: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;