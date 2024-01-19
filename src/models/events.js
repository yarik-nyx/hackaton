const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    count_member: {
      type: DataTypes.STRING,
      allowNull: true
    },
    earnings: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'events',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "events_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
