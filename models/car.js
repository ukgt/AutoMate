module.exports = function(sequelize, DataTypes) {
  const Car = sequelize.define("Car", {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {}
    },
    trim: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    },
    curMileage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {}
    },
    tireSize: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    },
    tirePSI: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    },
    wiperDriver: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    },
    wiperPass: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {}
    },
    wiperRear: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    },
    fuelTank: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    }
  });

  Car.associate = function(models) {
    Car.belongsTo(models.Owner);
  };

  return Car;
};
