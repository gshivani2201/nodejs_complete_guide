exports.get404 = (req, res, next) => {
  res.status(404).render("page-not-found", {
    pageTitle: "Page Not Found",
    path: req.url,
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render("500", {
    pageTitle: "Something went wrong.",
    path: "/500",
    isAuthenticated: req.session.isLoggedIn,
  });
};
