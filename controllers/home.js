module.exports = {
  getHomePage: async(req, res) => {
    try {
      res.render("index.ejs")
    } catch (error) {
      if (error) return res.status(500).send(error)
    }
  },
  createItem: async(req, res) => {
    const newItem = new ItemList(
      {
        textinput: req.body.textinput,
        numinput: req.body.numinput
    });
    try {
      await newItem.save()
      console.log(newItem)
      res.redirect("/")
    } catch (error) {
      if (error) return res.status(500).send(error)
      res.redirect("/")
    }
  }
}
