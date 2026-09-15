const resourceGroups = [
  {
    title: 'Templates',
    note: "Start from the chapter's working files instead of a blank page.",
    items: [
      { name: 'Media Kit Template', desc: 'Boilerplate, fact sheet, and pitch note structure used for client work.', badge: 'Free' },
      { name: 'Pitch Email Template', desc: 'The subject line and body format that gets the best reporter response rate.', badge: 'Free' },
      { name: 'Campaign One-Pager', desc: 'A single slide format for presenting a campaign plan to a client.', badge: 'Members' },
      { name: 'Meeting Minutes Template', desc: 'What the board uses to keep committee notes consistent.', badge: 'Members' }
    ]
  },
  {
    title: 'Job & internship boards',
    note: 'Where members actually find PR-specific openings.',
    items: [
      { name: 'PRSSA Internship Center', desc: 'National database of PR internships, searchable by region and industry.', badge: 'Members' },
      { name: 'Muck Rack', desc: 'Journalist and PR job listings, plus a place to build a public portfolio.', badge: 'Free' },
      { name: 'PRWeek Jobs', desc: 'Agency and in-house openings, mostly mid-to-senior but worth watching.', badge: 'Free' },
      { name: 'LinkedIn PR Groups', desc: 'Chapter-curated list of groups where alumni post openings first.', badge: 'Members' }
    ]
  },
  {
    title: 'Reading & training',
    note: 'What the board keeps coming back to between meetings.',
    items: [
      { name: 'PRSA Tactics', desc: 'Monthly magazine covering trends across the industry.', badge: 'Free' },
      { name: 'PR Daily', desc: "Daily industry news — good for staying current before an interview.", badge: 'Free' },
      { name: "Ragan's PR Daily Newsletter", desc: 'Short daily digest, easy to read between classes.', badge: 'Free' },
      { name: 'Chapter Campaign Archive', desc: 'Past client deliverables members can reference for their own portfolio.', badge: 'Members' }
    ]
  }
];

module.exports = {
  getResourcesPage: async (req, res) => {
    try {
      res.render("resources.ejs", { resourceGroups, active: 'resources' });
    } catch (error) {
      if (error) return res.status(500).send(error);
    }
  }
};
