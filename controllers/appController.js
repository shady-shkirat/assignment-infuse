exports.checkBody = (req, res, next) => {
  if (!req.body.text) {
    return res.status(400).json({
      status: "fail",
      message: "Missing text",
    });
  }
  next();
};

exports.createTicket = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      ticket: req.body.text.split("").reverse().join(""),
    },
  });
};

exports.getAppPage = (req, res) => {
  res.status(200).sendFile("./app.html", { root: `${__dirname}/../public` });
};
