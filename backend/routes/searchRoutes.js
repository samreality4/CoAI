const baseUrl = "/api";

module.exports = (app, Code) => {
  app.get("/main", (req, res) => {
    if (req.isAuthenticated()) {
      req.send(req.user);
    } else {
      console.log("not authenticated");
    }
  });

  app.post(`${baseUrl}/search`, (req, res) => {
    console.log(req.body.text);
    Code.find(
      {
        $text: {
          $search: req.body.text
        }
      },
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.post(`${baseUrl}/add`, (req, res) => {
    const code = new Code({
      question: req.body.question,
      projectUrl: req.body.projectUrl,
      keyword: req.body.keyword,
      codeLanguage: req.body.language,
      code: req.body.code
    });
    code.save(err => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully added");
      }
    });
  });

  app.put(`${baseUrl}/edit`, (req, res) => {
    Code.update(
      { _id: req.body.id },
      {
        question: req.body.question,
        projectUrl: req.body.projectUrl,
        keyword: req.body.keyword,
        codeLanguage: req.body.language,
        code: req.body.code
      },
      { overwrite: true },
      err => {
        if (!err) {
          res.send("successfully updated!");
        } else {
          console.log(err);
        }
      }
    );
  });

  app.post(`${baseUrl}/delete`, (req, res) => {
    Code.deleteOne({ _id: req.body.id }, err => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully deleted");
      }
    });
  });

  app.get("/main", (req, res) => {
    if (req.isAuthenticated()) {
      console.log("authenticated");
    } else {
      console.log("login fail");
    }
  });
};
