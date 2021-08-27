'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("bookmarks", {
      fields: ["user_id"],
      type: "foreign key",
      name: "users_bookmarks_id_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("bookmarks", {
      fields: ["post_id"],
      type: "foreign key",
      name: "posts_bookmarks_id_fk",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("bookmarks", "users_bookmarks_id_fk");
    await queryInterface.removeConstraint("bookmarks", "posts_bookmarks_id_fk");
  }
};
