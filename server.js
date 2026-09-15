const express = require('express');
const app = express()
const port = 3000

// Import functions/Routes
const homeRoutes = require("./routes/home");
const aboutRoutes = require("./routes/about");
const eventsRoutes = require("./routes/events");
const joinRoutes = require("./routes/join");
const resourcesRoutes = require("./routes/resources");
const contactRoutes = require("./routes/contact");

app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.use('/', homeRoutes);
app.use('/', aboutRoutes);
app.use('/', eventsRoutes);
app.use('/', joinRoutes);
app.use('/', resourcesRoutes);
app.use('/', contactRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
