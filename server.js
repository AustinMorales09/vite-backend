import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Pet from "./models/PetSchema.js"; // Import the Pet model

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'https://vite-deploy-ahyr.onrender.com',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// Routes
app.post("/pets", async (req, res) => {
    try {
        const pet = new Pet(req.body);
        await pet.save();
        res.status(201).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/pets", async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// comment
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
