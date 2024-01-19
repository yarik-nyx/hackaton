const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skills', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'skills',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "skills_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
