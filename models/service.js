module.exports = function(sequelize, DataTypes) {
  const Service = sequelize.define("Service", {
    shop: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    },
    serviceDate: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {}
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {}
    }
  });

  Service.assocation = function(models) {
    Service.hasMany(models.ServiceItem);
    Service.belongsTo(models.Car);
  };

  return Service;
};
