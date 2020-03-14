const passport = require("passport");
const HttpStatus = require("http-status-codes");

module.exports = (app, User) => {
  app.get("/current_user", (req, res) => {
    if (req.isAuthenticated()) {
      res.send(true);
    } else {
      res.send(false);
      console.log("not logged in!");
    }
  });

  app.post("/register", (req, res) => {
    User.register({ username: req.body.username }, req.body.password, err => {
      if (err) {
        console.log(err);
        res.status(HttpStatus.BAD_REQUEST).json("User already exist");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send(true);
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
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json("Login error.  Please try again later.");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send(true);
        });
      }
    });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.send(false);
  });
};
