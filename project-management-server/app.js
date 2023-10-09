
require("dotenv").config();

require("./db");


const express = require("express");

const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);


const projectRouter = require("./routes/project.routes");
app.use('/api',projectRouter)


const taskRouter = require("./routes/task.routes");    // <== IMPORT
app.use("/api", taskRouter); 

require("./error-handling")(app);

module.exports = app;
