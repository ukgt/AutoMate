module.exports = function(sequelize, DataTypes) {
  const Car = sequelize.define("Car", {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trim: {
      type: DataTypes.STRING,
      allowNull: true
    },
    curMileage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tireSize: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tirePSI: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wiperDriver: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wiperPass: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wiperRear: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuelTank: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  });

  Car.associate = function(models) {
    Car.belongsTo(models.Owner);
    Car.belongsTo(models.Manufacturer);
    Car.belongsTo(models.Make);
    Car.hasMany(models.Fuel);
    Car.hasMany(models.Service);
  };

  return Car;
};
