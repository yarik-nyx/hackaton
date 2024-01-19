const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_events', {
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
    }
  }, {
    sequelize,
    tableName: 'users_events',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_events_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
