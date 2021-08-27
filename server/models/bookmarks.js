'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookmarks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.bookmarks.belongsTo(models.users, {foreignKey:'user_id'})
      models.bookmarks.belongsTo(models.posts, {foreignKey:'post_id'})
    }
  };
  bookmarks.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'bookmarks',
  });
  return bookmarks;
};