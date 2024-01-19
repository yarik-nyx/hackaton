const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_skills', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skills',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users_skills',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_skills_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
