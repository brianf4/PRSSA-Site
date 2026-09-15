module.exports = {
  getContactPage: async (req, res) => {
    try {
      res.render("contact.ejs", { active: 'contact' });
    } catch (error) {
      if (error) return res.status(500).send(error);
    }
  }
};
