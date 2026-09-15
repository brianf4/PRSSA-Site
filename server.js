const express = require('express');
const app = express()
const port = 3000

// Import functions/Routes
const homeRoutes = require("./routes/home");

app.set("view engines", "ejs");
app.use(express.static("public"));

// Routes
app.use('/', homeRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
