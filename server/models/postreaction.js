'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postReaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.postReaction.belongsTo(models.users, { foreignKey: 'user_id' });
      models.postReaction.hasOne(models.posts, { foreignKey: 'post_id' });
    }
  }
  postReaction.init(
    {
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      reaction: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'postReaction',
    },
  );
  return postReaction;
};
