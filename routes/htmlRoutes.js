var db = require("../models");

module.exports = function (app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
  app.get("/", function(req, res) {
    db.FoodTruck.findAll({ include: [db.YelpReview] }).then(function (
      dbFoodtruck
    ) {
      console.log("dbFoodTruck" + dbFoodtruck);
      res.render("index", {
        msg: "This is empty Space! Handlebar message",
        FoodTruck: dbFoodtruck
      });
    });
  });
  app.get("/admin", function(req, res) {
    res.render("admin", {
      msg: "Admin Page"
    });
  });
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

// Render 404 page for any unmatched routes
app.get("*", function (req, res) {
  res.render("404");
});
};
