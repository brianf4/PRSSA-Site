const faqs = [
  { q: 'Do I have to be a communications major?', a: 'No. Members come from marketing, journalism, business, English, and design. If you are interested in the work, you are eligible.' },
  { q: 'What does the $55 actually cover?', a: 'National PRSSA dues and chapter dues for the full academic year, including free entry to every chapter event.' },
  { q: 'Can I attend before paying?', a: 'Yes — the first two general meetings each semester are open. Dues are required to vote, hold office, or attend member-only events.' },
  { q: 'How much time does it take?', a: 'General meetings are twice a month. Committee work adds two to three hours a week during an active campaign.' },
  { q: 'Do I need to rejoin every year?', a: "Yes — membership runs on the academic year, so you'll renew both national and chapter dues each fall." }
];

module.exports = {
  getJoinPage: async (req, res) => {
    try {
      res.render("join.ejs", { faqs, active: 'join' });
    } catch (error) {
      if (error) return res.status(500).send(error);
    }
  }
};
