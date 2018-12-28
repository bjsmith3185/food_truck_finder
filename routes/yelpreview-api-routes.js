var db = require("../models");
module.exports = function(app) {
  // GET route for getting all of the yelpreviews
  app.get("/api/yelpreviews", function(req, res) {
    var query = {};
    if (req.query.truck_id) {
      query.FoodTruckId = req.query.truck_id;
    }
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.FoodTruck
    db.YelpReview.findAll({
      where: query,
      include: [db.FoodTruck]
    }).then(function(dbYelpReview) {
      res.json(dbYelpReview);
    });
  });

  // Get route for retrieving a single YelpReview
  app.get("/api/yelpreviews/:id", function(req, res) {
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.FoodTruck
    db.YelpReview.findOne({
      where: {
        id: req.params.id
      },
      include: [db.FoodTruck]
    }).then(function(dbYelpReview) {
      res.json(dbYelpReview);
    });
  });

  // POST route for saving a new post
  app.post("/api/yelpreviews", function(req, res) {
    db.YelpReview.create(req.body).then(function(dbYelpReview) {
      res.json(dbYelpReview);
    });
  });

  // DELETE route for deleting yelpreviews
  app.delete("/api/yelpreviews/:id", function(req, res) {
    db.YelpReview.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbYelpReview) {
      res.json(dbYelpReview);
    });
  });

  // PUT route for updating yelpreviews
  app.put("/api/yelpreviews", function(req, res) {
    db.YelpReview.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbYelpReview) {
      res.json(dbYelpReview);
    });
  });
};
