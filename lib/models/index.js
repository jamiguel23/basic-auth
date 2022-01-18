'use strict'

require('dotenv').config

// const sequelize = require('sequelize')
const { Sequelize, DataTypes } = require('sequelize')

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};

const sequelize = new Sequelize(DATABASE_URL, options)

module.exports = {
  db: sequelize
}
