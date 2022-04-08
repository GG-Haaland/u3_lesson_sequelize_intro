'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        // {
        //   firstName: 'GJ', 
        //   lastName: 'Haaland', 
        //   email: 'haaland.gj@gmail.com', 
        //   password: '$BADASS$',
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // },
        // {
        //   firstName: 'Lo', 
        //   lastName: 'Phillips', 
        //   email: 'Lophillips@google.com', 
        //   password: '$GOOGLE$',
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // },
        // {
        //   firstName: 'Claudia', 
        //   lastName: 'Howard', 
        //   email: 'blah@gmail.com', 
        //   password: 'passwprd$',
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // },
        {
          firstName: 'King', 
          lastName: 'Richard', 
          email: 'Slapping.rocks@gmail.com', 
          password: '$BACKHAND',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
      ], 
      {}
    )
  },
  

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
