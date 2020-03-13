const passport = require("passport");

module.exports = (app, User) => {
  app.get("/current_user", (req, res) => {
    if (req.isAuthenticated()) {
      res.send(req.user);
    } else {
      res.send(false);
      console.log("not logging");
    }
  });

  app.post("/register", (req, res) => {
    User.register({ username: req.body.username }, req.body.password, err => {
      if (err) {
        console.log(err);
        console.log(err.statusCode);
        res.status(400).json("user already exists");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send(req.user);
        });
      }
    });
  });

  app.post("/login", (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    req.login(user, err => {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send(req.user);
        });
      }
    });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.send(false);
  });
};
