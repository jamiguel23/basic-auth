'use strict'

const bcrypt = require('bcrypt');
const {Sequelize, DataTypes} = require('sequelize')

const UserModel = (Sequelize, DataTypes => {

  const user = Sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

})


module.exports = UserModel;
