'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commentReaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.commentReaction.belongsTo(models.users, { foreignKey: 'user_id' });
      models.commentReaction.belongsTo(models.comments, {
        foreignKey: 'comment_id',
      });
    }
  }
  commentReaction.init(
    {
      user_id: DataTypes.INTEGER,
      comment_id: DataTypes.INTEGER,
      reaction: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'commentReaction',
    },
  );
  return commentReaction;
};
