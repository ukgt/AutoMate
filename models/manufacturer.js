module.exports = function(sequelize, DataTypes) {
  const Manufacturer = sequelize.define("Manufacturer", {
    manufacturerName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Manufacturer.associate = function(models) {
    Manufacturer.hasMany(models.Make);
    Manufacturer.hasMany(models.Car);
  };

  return Manufacturer;
};
