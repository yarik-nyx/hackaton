var DataTypes = require("sequelize").DataTypes;
var _events = require("./events");
var _grads = require("./grads");
var _marks = require("./marks");
var _roles = require("./roles");
var _skills = require("./skills");
var _users = require("./users");
var _users_events = require("./users_events");
var _users_skills = require("./users_skills");

function initModels(sequelize) {
  var events = _events(sequelize, DataTypes);
  var grads = _grads(sequelize, DataTypes);
  var marks = _marks(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var skills = _skills(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_events = _users_events(sequelize, DataTypes);
  var users_skills = _users_skills(sequelize, DataTypes);

  marks.belongsTo(events, { as: "event", foreignKey: "event_id"});
  events.hasMany(marks, { as: "marks", foreignKey: "event_id"});
  users_events.belongsTo(events, { as: "event", foreignKey: "event_id"});
  events.hasMany(users_events, { as: "users_events", foreignKey: "event_id"});
  users.belongsTo(grads, { as: "grad", foreignKey: "grad_id"});
  grads.hasMany(users, { as: "users", foreignKey: "grad_id"});
  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});
  users_skills.belongsTo(skills, { as: "skill", foreignKey: "skill_id"});
  skills.hasMany(users_skills, { as: "users_skills", foreignKey: "skill_id"});
  marks.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(marks, { as: "marks", foreignKey: "user_id"});
  users_events.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(users_events, { as: "users_events", foreignKey: "user_id"});
  users_skills.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(users_skills, { as: "users_skills", foreignKey: "user_id"});

  return {
    events,
    grads,
    marks,
    roles,
    skills,
    users,
    users_events,
    users_skills,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
