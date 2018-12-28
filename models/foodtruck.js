module.exports = function(sequelize, DataTypes) {
  var FoodTruck = sequelize.define("FoodTruck", {
    // From Admin input
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    //From Yelp
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // From Admin input
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    // From Twitter
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "Mariana Trench"
      //We will have to set a default address to prevent issues with the map markers
    },
    // // From Twitter
    // thumbnail: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   //We can set a default thumbnail
    //   validate: {
    //     isUrl: true
    //   }
    // },
    //From Yelp
    overallRating: {
      type: DataTypes.STRING
    },
    // From Yelp
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://files.slack.com/files-pri/TASBCBPNX-FDFUDJPFY/food_truck_logo2.png",
      validate: {
        isUrl: true
      }
    },
    // From Admin input
    twitterId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //From Yelp
    priceRating: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //From twitter
    addressUpdated: {
      type: DataTypes.DATE,
      allowNull: true
    }
    // TODO: add column(s) for hours of operation. Yelp returns an object that contains "hours" that contains "open" is broken into an array of day objects (0-6):
    // {
    //   "is_overnight": false,
    //   "end": "2200",
    //   "day": 0,
    //   "start": "1730"
    // }
  });
  FoodTruck.associate = function(models) {
    // Associating FoodTruck with YelpReviews
    // When an FoodTruck is deleted, also delete any associated YelpReviews
    FoodTruck.hasMany(models.YelpReview, {
      onDelete: "cascade"
    });
  };
  return FoodTruck;
};
