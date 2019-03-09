module.exports = function(sequelize, DataTypes) {
    const Owner = sequelize.define("Owner", {
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        },
        insPolicy: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                
            }
        },
        curCar: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                
            }
        }
    });
    
    return Owner;
};