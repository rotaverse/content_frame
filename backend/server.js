import dotenv from "dotenv";
import express from "express";

import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'

dotenv.config() 
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});


app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
