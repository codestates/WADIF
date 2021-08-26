'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comments.belongsTo(models.users, {foreignKey:'user_id'})
      models.comments.belongsTo(models.posts, {foreignKey:'post_id'})
      models.comments.hasOne(models.commentReactions, {foreignKey:'comment_id'})
    }
  };
  comments.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    opinion: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};