'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('tokens', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'users_tokens_id_fk',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('tokens', 'users_tokens_id_fk');
  },
};
