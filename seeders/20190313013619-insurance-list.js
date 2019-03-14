"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert("Insurances", [
        { carrierName: "AAA", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Allstate", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "American Family", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Ameriprise", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Amica", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Auto-Owners", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Farmers", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Geico", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Hartford", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Liberty Mutual", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Mercury", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "MetLife", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Nationwide", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Progressive", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "State Farm", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "Travelers", createdAt: new Date(), updatedAt: new Date() },
        { carrierName: "USAA", createdAt: new Date(), updatedAt: new Date() }
      ], {});

  }

  // down: (queryInterface, Sequelize) => {
  //   /*
  //     Add reverting commands here.
  //     Return a promise to correctly handle asynchronicity.

  //     Example:
  //     return queryInterface.bulkDelete('People', null, {});
  //   */
  // }
};
