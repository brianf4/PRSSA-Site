const board = [
  { name: 'Jasmine Ortega', role: 'President', major: "Public Relations, '27" },
  { name: 'Devon Park', role: 'Vice President', major: "Communication Studies, '27" },
  { name: 'Camila Reyes', role: 'Treasurer', major: "Business Marketing, '26" },
  { name: 'Andre Whitfield', role: 'Secretary', major: "Journalism, '28" },
  { name: 'Leilani Cruz', role: 'Social Media Chair', major: "Public Relations, '27" },
  { name: 'Tobias Kim', role: 'Events Chair', major: "Communication Studies, '26" },
  { name: 'Nadia Haddad', role: 'Outreach Chair', major: "Public Relations, '28" },
  { name: 'Erik Solano', role: 'Alumni Relations', major: "Communication Studies, '27" }
];

module.exports = {
  getAboutPage: async (req, res) => {
    try {
      res.render("about.ejs", { board, active: 'about' });
    } catch (error) {
      if (error) return res.status(500).send(error);
    }
  }
};
