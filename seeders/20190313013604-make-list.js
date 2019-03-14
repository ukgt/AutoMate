'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Makes', [
        { makeName: "ILX", manufacturerName: "Acura", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "MDX", manufacturerName: "Acura", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "NSX", manufacturerName: "Acura", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "RDX", manufacturerName: "Acura", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "RLX", manufacturerName: "Acura", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "TLX", manufacturerName: "Acura", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "4C", manufacturerName: "Alfa Romeo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Giulia", manufacturerName: "Alfa Romeo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Stelvio", manufacturerName: "Alfa Romeo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "A3", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "A4", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "A5", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "A6", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "A7", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "A8", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Q3", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Q5", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Q7", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "TT", manufacturerName: "Audi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "3 Series", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "5 Series", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "6 Series", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "7 Series", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "i3", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "i8", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "X1", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "X3", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "X5", manufacturerName: "BMW", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Cascada", manufacturerName: "Buick", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Enclave", manufacturerName: "Buick", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Encore", manufacturerName: "Buick", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Envision", manufacturerName: "Buick", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "LaCrosse", manufacturerName: "Buick", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Regal", manufacturerName: "Buick", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "CTS", manufacturerName: "Cadillac", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Escalade", manufacturerName: "Cadillac", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XT4", manufacturerName: "Cadillac", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XT5", manufacturerName: "Cadillac", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XTS", manufacturerName: "Cadillac", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Camaro", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Colorado", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Corvette", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Cruze", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Equinox", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Express", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Impala", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Malibu", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Silverado", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sonic Volt", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Spark", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Suburban", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Tahoe", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Traverse", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Trax", manufacturerName: "Chevrolet", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "300", manufacturerName: "Chrysler", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Pacifica", manufacturerName: "Chrysler", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Challenger", manufacturerName: "Dodge", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Charger", manufacturerName: "Dodge", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Durango", manufacturerName: "Dodge", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Grand Caravan ", manufacturerName: "Dodge", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Journey", manufacturerName: "Dodge", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "124 Spider", manufacturerName: "FIAT", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "500", manufacturerName: "FIAT", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "EcoSport", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Edge", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Escape", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Expedition", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Explorer", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "F-150", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Fiesta", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Focus", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Fusion", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Mustang", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Ranger", manufacturerName: "Ford", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Acadia", manufacturerName: "GMC", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Canyon", manufacturerName: "GMC", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Savana", manufacturerName: "GMC", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sierra 1500", manufacturerName: "GMC", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Terrain", manufacturerName: "GMC", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Yukon", manufacturerName: "GMC", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Accord", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Civic", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Clarity", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "CR-V", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Fit", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "HR-V", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Insight", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Odyssey", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Pilot", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Ridgeline", manufacturerName: "Honda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Accent", manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Elantra", manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Ioniq", manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Kona", manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Santa Fe", manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sonata", manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Tucson", manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Veloster", manufacturerName: "Hyundai", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Q50", manufacturerName: "INFINITI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Q60", manufacturerName: "INFINITI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Q70", manufacturerName: "INFINITI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "QX30", manufacturerName: "INFINITI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "QX50", manufacturerName: "INFINITI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "QX60", manufacturerName: "INFINITI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "QX80", manufacturerName: "INFINITI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "E-PACE", manufacturerName: "Jaguar", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "F-PACE", manufacturerName: "Jaguar", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "F-TYPE", manufacturerName: "Jaguar", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "I-PACE", manufacturerName: "Jaguar", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XE", manufacturerName: "Jaguar", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XF", manufacturerName: "Jaguar", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XJ", manufacturerName: "Jaguar", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Cherokee ", manufacturerName: "Jeep", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Compass", manufacturerName: "Jeep", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Grand Cherokee", manufacturerName: "Jeep", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Liberty", manufacturerName: "Jeep", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Renegade", manufacturerName: "Jeep", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Wrangler", manufacturerName: "Jeep", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Cadenza", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Forte", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "K900", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Niro", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Optima", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Rio", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sedona", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sorento", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Soul", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sportage", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Stinger", manufacturerName: "Kia", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Discovery", manufacturerName: "Land Rover", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Evoque", manufacturerName: "Land Rover", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Range Rover", manufacturerName: "Land Rover", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "ES", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "GS", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "GX", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "IS", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "LC", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "LS", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "LX", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "NX", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "RC", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "RX", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "UX", manufacturerName: "Lexus", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Aviator", manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Continental", manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "MKC", manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "MKT", manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "MKX", manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "MKZ", manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Nautilus", manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Navigator", manufacturerName: "Lincoln", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Ghibli", manufacturerName: "Maserati", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "GranTurismo", manufacturerName: "Maserati", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Levante", manufacturerName: "Maserati", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Quattroporte", manufacturerName: "Maserati", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "CX-3", manufacturerName: "Mazda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "CX-5", manufacturerName: "Mazda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "CX-9", manufacturerName: "Mazda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Mazda3", manufacturerName: "Mazda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Mazda6", manufacturerName: "Mazda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "MX-5 Miata", manufacturerName: "Mazda", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "A-Class", manufacturerName: "Mercedes-Benz", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "C-Class", manufacturerName: "Mercedes-Benz", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "CLA-Class", manufacturerName: "Mercedes-Benz", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "CLS-Class", manufacturerName: "Mercedes-Benz", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "E-Class", manufacturerName: "Mercedes-Benz", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "G-Class", manufacturerName: "Mercedes-Benz", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "GLA-Class", manufacturerName: "Mercedes-Benz", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Clubman", manufacturerName: "MINI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Cooper", manufacturerName: "MINI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Countryman", manufacturerName: "MINI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Pacer", manufacturerName: "MINI", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Eclipse Cross", manufacturerName: "Mitsubishi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Mirage", manufacturerName: "Mitsubishi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Outlander", manufacturerName: "Mitsubishi", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Altima", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Armada", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Frontier", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "GT-R", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Kicks", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "LEAF", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Maxima", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Murano", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "NV200", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Pathfinder", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Rogue", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sentra", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Titan", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Versa", manufacturerName: "Nissan", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "911", manufacturerName: "Porsche", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Boxster", manufacturerName: "Porsche", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Cayenne", manufacturerName: "Porsche", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Cayman", manufacturerName: "Porsche", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Macan", manufacturerName: "Porsche", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Panamera", manufacturerName: "Porsche", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "1500", manufacturerName: "Ram", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "ProMaster", manufacturerName: "Ram", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Ascent", manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "BRZ", manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Crosstrek", manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Forester", manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Impreza", manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Legacy", manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Outback", manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "WRX", manufacturerName: "Subaru", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "4Runner", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "86", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Avalon", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "C-HR", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Camry", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Corolla", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Highlander", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Land Cruiser", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Mirai", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Prius", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "RAV4", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sequoia", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Sienna", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Tacoma", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Tundra", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Yaris", manufacturerName: "Toyota", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Atlas", manufacturerName: "Volkswagen", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Beetle", manufacturerName: "Volkswagen", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Golf", manufacturerName: "Volkswagen", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "GTI", manufacturerName: "Volkswagen", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Jetta", manufacturerName: "Volkswagen", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Passat", manufacturerName: "Volkswagen", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "Tiguan", manufacturerName: "Volkswagen", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "S60", manufacturerName: "Volvo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "S90", manufacturerName: "Volvo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "V60", manufacturerName: "Volvo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "V90", manufacturerName: "Volvo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XC40", manufacturerName: "Volvo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XC60", manufacturerName: "Volvo", createdAt: new Date(), updatedAt: new Date() }
        { makeName: "XC90", manufacturerName: "Volvo", createdAt: new Date(), updatedAt: new Date() }
      ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
