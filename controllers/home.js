const featured = [
  {
    id: 'golin',
    when: 'Thu, Sep 18 · 6:00 PM',
    place: 'Downtown Los Angeles',
    title: 'Agency Tour: Golin LA',
    blurb: 'A behind-the-scenes afternoon with the account teams, plus a Q&A on breaking into agency life.'
  },
  {
    id: 'resume',
    when: 'Tue, Sep 30 · 12:15 PM',
    place: 'King Hall, Room C2098',
    title: 'Résumé & Portfolio Lab',
    blurb: 'Bring a draft. Board members and an LA PRSA mentor mark it up with you on the spot.'
  },
  {
    id: 'alumni',
    when: 'Wed, Oct 15 · 5:30 PM',
    place: 'Golden Eagle Ballroom',
    title: 'Alumni Night',
    blurb: 'Six chapter alums on what their first two years in PR actually looked like.'
  }
];

module.exports = {
  getHomePage: async(req, res) => {
    try {
      res.render("index.ejs", { featured })
    } catch (error) {
      if (error) return res.status(500).send(error)
    }
  },
}
