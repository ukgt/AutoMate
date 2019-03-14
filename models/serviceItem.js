module.exports = function(sequelize, DataTypes) {
  const ServiceItem = sequelize.define("ServiceItem", {
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // ServiceItem.associate = function(models) {
  //   ServiceItem.belongsTo(models.Service);
  //   ServiceItem.belongsTo(models.ServiceTypes);
  // };

  return ServiceItem;
};
