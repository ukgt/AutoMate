module.exports = function(sequelize, DataTypes) {
  const Car = sequelize.define("Car", {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {}
    },
    trim: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    curMileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {}
    },
    tireSize: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    tirePSI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {}
    },
    wiperDriver: {
      type: DataTypes.FLOAT,
      allowNull: false,
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
      allowNull: false,
      validate: {}
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    fuelTank: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {}
    }
  });

  return Car;
};
