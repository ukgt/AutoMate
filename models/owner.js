module.exports = function(sequelize, DataTypes) {
  const Owner = sequelize.define("Owner", {
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    insPolicy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    curCar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Owner.associate = function(models) {
    Owner.hasMany(models.Car);
  };

  return Owner;
};
