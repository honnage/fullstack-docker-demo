import express from 'express';
import dotenv from 'dotenv';
import mongoUri from './config/connectDB';
import mongoose from 'mongoose';
import morgan from 'morgan';
import userRoutes from './routes/user';

dotenv.config(); 
const app = express();
const port = process.env.PORT || 9000;

const mongoConnectUri = mongoUri();
if (mongoConnectUri) {
  mongoose.connect(mongoConnectUri)
    .then(() => {
      console.log("Mongodb Connection established");
    })
    .catch(error => {
      console.error("Error connecting to MongoDB", error);
    });
} else {
  console.log("MongoDB connection URI is not defined.");
}


app.use(morgan("DEV"));
app.use(express.json());


app.use("/server-health", (req, res) => {
  res.status(200).json({
    success: "OK",
    message: "Server health is fine"
  })
})

app.use("/api/v1/users", userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
    console.log(`http://localhost:${port}`);
});
