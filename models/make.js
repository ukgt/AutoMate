module.exports = function(sequelize, DataTypes) {
  const Make = sequelize.define("Make", {
    makeName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Make.associate = function(models) {
    Make.belongsTo(models.Manufacturer);
    Make.hasMany(models.Car);
  };

  return Make;
};
