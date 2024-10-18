import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import serviceRoutes from "./routes/service.route.js";

dotenv.config()
const  app = express();

app.use(express.json());
app.use("/api/service",serviceRoutes)

const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

app.listen(process.env.PORT || 6060 , () => {
    connectDB();
    console.log("hello world")
})