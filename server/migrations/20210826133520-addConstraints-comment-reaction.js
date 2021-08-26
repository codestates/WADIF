'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("commentReactions", {
      fields: ["user_id"],
      type: "foreign key",
      name: "users_commentReactions_id_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("commentReactions", {
      fields: ["comment_id"],
      type: "foreign key",
      name: "comments_commentReactions_id_fk",
      references: {
        table: "comments",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("commentReactions", "users_commentReactions_id_fk");
    await queryInterface.removeConstraint("commentReactions", "comments_commentReactions_id_fk");
  }
};
