module.exports = function(sequelize, DataTypes) {
    const Manufacturer = sequelize.define("Manufacturer", {
        manufacturerName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Manufacturer;
};

