const express=require("express");
const cors=require("cors");
const noteRoutes=require("./routes/noteRoutes");

const app=express();
app.use(cors());
app.use(express.json());

app,use("/api/notes",noteRoutes);
app.listen(5000,()=>console.log("server running on port 5000"))