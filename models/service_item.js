module.exports = function(sequelize, DataTypes) {
    const ServiceTypes = sequelize.define("ServiceType", {
        serviceName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        }
    });

    return ServiceTypes;
};