const EVENTS = [
  { id: 'golin', when: 'Thu, Sep 18 · 6:00 PM', place: 'Downtown Los Angeles', tag: 'Agency tour', upcoming: true,
    title: 'Agency Tour: Golin LA', blurb: 'A behind-the-scenes afternoon with the account teams, plus a Q&A on breaking into agency life.',
    views: 124, comments: 6, likes: 18 },
  { id: 'resume', when: 'Tue, Sep 30 · 12:15 PM', place: 'King Hall, Room C2098', tag: 'Workshop', upcoming: true,
    title: 'Résumé & Portfolio Lab', blurb: 'Bring a draft. Board members and an LA PRSA mentor mark it up with you on the spot.',
    views: 87, comments: 3, likes: 11 },
  { id: 'alumni', when: 'Wed, Oct 15 · 5:30 PM', place: 'Golden Eagle Ballroom', tag: 'Panel', upcoming: true,
    title: 'Alumni Night', blurb: 'Six chapter alums on what their first two years in PR actually looked like.',
    views: 203, comments: 12, likes: 34 },
  { id: 'mediakit', when: 'Thu, Nov 6 · 6:00 PM', place: 'King Hall, Room C2098', tag: 'Workshop', upcoming: true,
    title: 'Building a Media Kit From Scratch', blurb: "A hands-on build using the chapter's real fall client. Templates provided.",
    views: 41, comments: 1, likes: 7 },
  { id: 'kickoff', when: 'Wed, Aug 27 · 5:30 PM', place: 'King Hall, Room C2098', tag: 'Recap', upcoming: false,
    title: 'Fall Kickoff Meeting', blurb: 'Sixty-one students packed the room for the semester overview and committee signups.',
    views: 318, comments: 9, likes: 46 },
  { id: 'nonprofit', when: 'Tue, Apr 22 · 6:00 PM', place: 'Zoom', tag: 'Recap', upcoming: false,
    title: 'Nonprofit Communications Panel', blurb: 'Three communicators on mission-driven work, small budgets, and telling stories that raise money.',
    views: 176, comments: 5, likes: 23 }
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'recaps', label: 'Recaps' }
];

module.exports = {
  getEventsPage: async (req, res) => {
    try {
      const selected = ['all', 'upcoming', 'recaps'].includes(req.query.filter) ? req.query.filter : 'all';

      const eventList = EVENTS.filter((ev) => {
        if (selected === 'upcoming') return ev.upcoming;
        if (selected === 'recaps') return !ev.upcoming;
        return true;
      });

      const filters = FILTERS.map((f) => ({ ...f, active: f.key === selected }));

      res.render("events.ejs", { eventList, filters, active: 'events' });
    } catch (error) {
      if (error) return res.status(500).send(error);
    }
  }
};
