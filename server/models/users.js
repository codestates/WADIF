'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.posts, { foreignKey: 'user_id' });
      models.users.hasMany(models.comments, { foreignKey: 'user_id' });
      models.users.hasMany(models.bookmarks, { foreignKey: 'user_id' });
      models.users.hasMany(models.postReaction, { foreignKey: 'user_id' });
      models.users.hasMany(models.commentReaction, { foreignKey: 'user_id' });
    }
  }
  users.init(
    {
      userId: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'users',
    },
  );
  return users;
};
