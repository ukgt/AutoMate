"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert("Manufacturers", [
        { manufacturerName: "Acura", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Alfa Romeo", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Cadillac", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Chrysler", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Dodge", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "FIAT", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "GMC", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "INFINITI", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Jaguar", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Jeep", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Land Rover", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Maserati", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Mazda", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Mercedes-Benz", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "MINI", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Mitsubishi", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Porsche", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Ram", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Volkswagen", createdAt: new Date(), updatedAt: new Date() },
        { manufacturerName: "Volvo", createdAt: new Date(), updatedAt: new Date() },
      ], {});

  }

  // down: (queryInterface, Sequelize) => {
  //   /*
  //     Add reverting commands here.
  //     Return a promise to correctly handle asynchronicity.

  //     Example:
  //     return queryInterface.bulkDelete("People", null, {});
  //   */
  // }
};
