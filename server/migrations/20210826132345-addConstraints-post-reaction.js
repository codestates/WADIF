'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("postReactions", {
      fields: ["user_id"],
      type: "foreign key",
      name: "users_postReactions_id_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("postReactions", {
      fields: ["post_id"],
      type: "foreign key",
      name: "posts_postReactions_id_fk",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("postReactions", "users_postReactions_id_fk");
    await queryInterface.removeConstraint("postReactions", "posts_postReactions_id_fk");
  }
};
