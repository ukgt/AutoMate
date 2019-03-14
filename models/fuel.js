module.exports = function(sequelize, DataTypes) {
  const Fuel = sequelize.define("Fuel", {
    odometer: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    },
    gallon: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {}
    },
    pricePerGallon: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    },
    mpg: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    },
    gasStation: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    }
    // latLoc: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false,
    //   validate: {}
    // },
    // longLoc: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false,
    //   validate: {}
    // }
  });

  Fuel.associate = function(models) {
    Fuel.belongsTo(models.Car);
  };

  return Fuel;
};
