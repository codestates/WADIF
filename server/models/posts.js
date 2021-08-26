'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.posts.belongsTo(models.users, {foreignKey:'user_id'})
      models.posts.hasMany(models.comments, {foreignKey:'post_id'})
      models.posts.hasMany(models.bookmarks, {foreignKey:'post_id'})
      models.posts.hasOne(models.postReactions, {foreignKey:'post_id'})
    }
  };
  posts.init({
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};