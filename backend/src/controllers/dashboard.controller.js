// Explore – all roles
export const explore = (req, res) => {
  res.json({
    screen: "explore",
    role: req.user.role,
    message: "Explore startups and investors"
  });
};

// Pitch Deck – entrepreneur only
export const pitchDeck = (req, res) => {
  res.json({
    screen: "pitch-deck",
    role: req.user.role,
    message: "Manage your pitch decks"
  });
};

// Analysis – entrepreneur only
export const analysis = (req, res) => {
  res.json({
    screen: "analysis",
    role: req.user.role,
    message: "View analytics and insights"
  });
};
