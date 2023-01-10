'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            email: "bmhung17903@gmail.com",
            password: "hungbui179",
            firstName: "Hung",
            lastName: "Bui Manh",
            address: "VN",
            gender: 1,
            typeRole: 'ROLE',
            keyRole: 'R1',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
}; 