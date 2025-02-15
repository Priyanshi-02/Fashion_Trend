const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroute = require("./routes/rootroute");
// const rootcontroller = require("./controllers/rootcontroller");
const connectDB = require("./config/db");  
const productroute = require("./routes/productroute");

const PORT = process.env.PORT || 6000 || 8080;
connectDB();
const app = express();
 


// app.get("/", (req, res)=>{
//     res.send("api is working");
// });

app.use("/", rootroute);

// app.use("/fashiontrends", rootroute);

app.use("/fashiontrends", productroute);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.white);
}); 