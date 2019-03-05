module.exports = function(sequelize, DataTypes) {
    const Make = sequelize.define("Make", {
        makeName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        }
    });

    return Make;
};