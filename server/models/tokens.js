'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.tokens.belongsTo(models.users, { foreignKey: 'user_id' });
    }
  }
  tokens.init(
    {
      user_id: DataTypes.INTEGER,
      accessToken: DataTypes.STRING(1234),
      refreshToken: DataTypes.STRING(1234),
    },
    {
      sequelize,
      modelName: 'tokens',
    },
  );
  return tokens;
};
