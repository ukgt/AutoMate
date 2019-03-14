module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};
