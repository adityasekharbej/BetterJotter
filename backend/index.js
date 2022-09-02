const express = require("express");
const connection = require("./db")
const cors = require("cors");
require("dotenv").config()
const userRouter = require("./routes/user.route");
const taskRouter = require("./routes/task.route");

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.json())

app.use(cors());

app.use("/users", userRouter);
app.use("/api/tasks", taskRouter);


app.listen(8080, async() => {
    try{
        await connection;   
        console.log("connected to db successfully")
    }
    catch{
        console.log("something went wrong while connecting to db")
    }
    console.log("Server listening on localhost:8080")
})