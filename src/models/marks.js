const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marks', {
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
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events',
        key: 'id'
      }
    },
    mark: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'marks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "marks_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
