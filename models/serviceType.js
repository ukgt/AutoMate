module.exports = function(sequelize, DataTypes) {
  const ServiceTypes = sequelize.define("ServiceType", {
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    }
  });

  // ServiceTypes.associate = function(models) {
  //   ServiceTypes.belongsTo(models.ServiceItem);
  // };

  return ServiceTypes;
};
