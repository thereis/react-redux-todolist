const express = require('express')

module.exports = function (app) {
// API routes
    const router = express.Router()
    app.use('/api', router)

    // routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}