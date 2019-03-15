'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert("Makes", [
      { makeName: "ILX", manufacturerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "MDX", manufacturerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "NSX", manufacturerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "RDX", manufacturerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "RLX", manufacturerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "TLX", manufacturerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "4C", manufacturerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Giulia", manufacturerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Stelvio", manufacturerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "A3", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "A4", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "A5", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "A6", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "A7", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "A8", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Q3", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Q5", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Q7", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "TT", manufacturerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "3 Series", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "5 Series", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "6 Series", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "7 Series", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "i3", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "i8", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "X1", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "X3", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "X5", manufacturerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "CTS", manufacturerId: 5, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Escalade", manufacturerId: 5, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XT4", manufacturerId: 5, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XT5", manufacturerId: 5, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XTS", manufacturerId: 5, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Camaro", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Colorado", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Corvette", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Cruze", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Equinox", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Express", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Impala", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Malibu", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Silverado", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sonic Volt", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Spark", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Suburban", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Tahoe", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Traverse", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Trax", manufacturerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "300", manufacturerId: 7, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Pacifica", manufacturerId: 7, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Challenger", manufacturerId: 8, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Charger", manufacturerId: 8, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Durango", manufacturerId: 8, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Grand Caravan ", manufacturerId: 8, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Journey", manufacturerId: 8, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "124 Spider", manufacturerId: 9, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "500", manufacturerId: 9, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "EcoSport", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Edge", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Escape", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Expedition", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Explorer", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "F-150", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Fiesta", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Focus", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Fusion", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Mustang", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Ranger", manufacturerId: 10, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Acadia", manufacturerId: 11, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Canyon", manufacturerId: 11, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Savana", manufacturerId: 11, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sierra 1500", manufacturerId: 11, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Terrain", manufacturerId: 11, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Yukon", manufacturerId: 11, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Accord", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Civic", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Clarity", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "CR-V", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Fit", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "HR-V", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Insight", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Odyssey", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Pilot", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Ridgeline", manufacturerId: 12, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Accent", manufacturerId: 13, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Elantra", manufacturerId: 13, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Ioniq", manufacturerId: 13, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Kona", manufacturerId: 13, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Santa Fe", manufacturerId: 13, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sonata", manufacturerId: 13, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Tucson", manufacturerId: 13, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Veloster", manufacturerId: 13, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Q50", manufacturerId: 14, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Q60", manufacturerId: 14, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Q70", manufacturerId: 14, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "QX30", manufacturerId: 14, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "QX50", manufacturerId: 14, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "QX60", manufacturerId: 14, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "QX80", manufacturerId: 14, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "E-PACE", manufacturerId: 15, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "F-PACE", manufacturerId: 15, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "F-TYPE", manufacturerId: 15, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "I-PACE", manufacturerId: 15, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XE", manufacturerId: 15, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XF", manufacturerId: 15, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XJ", manufacturerId: 15, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Cherokee ", manufacturerId: 16, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Compass", manufacturerId: 16, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Grand Cherokee", manufacturerId: 16, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Liberty", manufacturerId: 16, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Renegade", manufacturerId: 16, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Wrangler", manufacturerId: 16, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Cadenza", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Forte", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "K900", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Niro", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Optima", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Rio", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sedona", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sorento", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Soul", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sportage", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Stinger", manufacturerId: 17, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Discovery", manufacturerId: 18, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Evoque", manufacturerId: 18, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Range Rover", manufacturerId: 18, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "ES", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "GS", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "GX", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "IS", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "LC", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "LS", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "LX", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "NX", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "RC", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "RX", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "UX", manufacturerId: 19, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Aviator", manufacturerId: 20, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Continental", manufacturerId: 20, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "MKC", manufacturerId: 20, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "MKT", manufacturerId: 20, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "MKX", manufacturerId: 20, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "MKZ", manufacturerId: 20, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Nautilus", manufacturerId: 20, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Navigator", manufacturerId: 20, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Ghibli", manufacturerId: 21, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "GranTurismo", manufacturerId: 21, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Levante", manufacturerId: 21, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Quattroporte", manufacturerId: 21, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "CX-3", manufacturerId: 22, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "CX-5", manufacturerId: 22, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "CX-9", manufacturerId: 22, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Mazda3", manufacturerId: 22, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Mazda6", manufacturerId: 22, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "MX-5 Miata", manufacturerId: 22, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "A-Class", manufacturerId: 23, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "C-Class", manufacturerId: 23, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "CLA-Class", manufacturerId: 23, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "CLS-Class", manufacturerId: 23, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "E-Class", manufacturerId: 23, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "G-Class", manufacturerId: 23, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "GLA-Class", manufacturerId: 23, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Clubman", manufacturerId: 24, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Cooper", manufacturerId: 24, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Countryman", manufacturerId: 24, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Pacer", manufacturerId: 24, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Eclipse Cross", manufacturerId: 25, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Mirage", manufacturerId: 25, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Outlander", manufacturerId: 25, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Altima", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Armada", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Frontier", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "GT-R", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Kicks", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "LEAF", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Maxima", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Murano", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "NV200", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Pathfinder", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Rogue", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sentra", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Titan", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Versa", manufacturerId: 26, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "911", manufacturerId: 27, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Boxster", manufacturerId: 27, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Cayenne", manufacturerId: 27, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Cayman", manufacturerId: 27, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Macan", manufacturerId: 27, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Panamera", manufacturerId: 27, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "1500", manufacturerId: 28, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "ProMaster", manufacturerId: 28, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Ascent", manufacturerId: 29, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "BRZ", manufacturerId: 29, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Crosstrek", manufacturerId: 29, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Forester", manufacturerId: 29, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Impreza", manufacturerId: 29, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Legacy", manufacturerId: 29, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Outback", manufacturerId: 29, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "WRX", manufacturerId: 29, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "4Runner", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "86", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Avalon", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "C-HR", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Camry", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Corolla", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Highlander", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Land Cruiser", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Mirai", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Prius", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "RAV4", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sequoia", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Sienna", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Tacoma", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Tundra", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Yaris", manufacturerId: 30, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Atlas", manufacturerId: 31, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Beetle", manufacturerId: 31, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Golf", manufacturerId: 31, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "GTI", manufacturerId: 31, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Jetta", manufacturerId: 31, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Passat", manufacturerId: 31, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "Tiguan", manufacturerId: 31, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "S60", manufacturerId: 32, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "S90", manufacturerId: 32, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "V60", manufacturerId: 32, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "V90", manufacturerId: 32, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XC40", manufacturerId: 32, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XC60", manufacturerId: 32, createdAt: new Date(), updatedAt: new Date() },
      { makeName: "XC90", manufacturerId: 32, createdAt: new Date(), updatedAt: new Date() }
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