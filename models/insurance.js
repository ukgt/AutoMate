module.exports = function(sequelize, DataTypes) {
    const Insurance = sequelize.define("Insurance", {
        carrierName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        }
    });

    return Insurance;
};