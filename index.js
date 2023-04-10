const express = require("express");
const app = express();
require("dotenv").config()
// const dbConfig = require("./config/dbConfig");
app.use(express.json());
const empRouter = require("./routes/empRoutes")

app.use("/api/v1", empRouter);

app.listen(process.env.PORT, () => {
    console.log("Server in running on:", process.env.PORT);
});