module.exports = function(sequelize, DataTypes) {
  const Insurance = sequelize.define("Insurance", {
    carrierName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    }
  });

  return Insurance;
};
