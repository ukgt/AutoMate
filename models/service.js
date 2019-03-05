module.exports = function(sequelize, DataTypes) {
    const Service = sequelize.define("Service", {
        shop: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {

            }
        },
        serviceDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {

            }
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {

            }
        }
    });

    return Service;
};