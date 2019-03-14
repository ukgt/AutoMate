module.exports = function(sequelize, DataTypes) {
  const ServiceItem = sequelize.define("ServiceItem");

  ServiceItem.associate = function(models) {
    ServiceItem.belongsTo(models.Service);
    // ServiceItem.belongsTo(models.ServiceTypes);
  };

  return ServiceItem;
};
