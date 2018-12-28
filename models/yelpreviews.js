module.exports = function(sequelize, DataTypes) {
  var YelpReview = sequelize.define("YelpReview", {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    contentTimeCreated: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentUrl: {
      type: DataTypes.TEXT
    },
    userImage: {
      type: DataTypes.TEXT
    }
  });

  YelpReview.associate = function(models) {
    // We're saying that a YelpReview should belong to an FoodTruck
    // A YelpReview can't be created without an FoodTruck due to the foreign key constraint
    YelpReview.belongsTo(models.FoodTruck, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return YelpReview;
};
