import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;