const express = require('express');

module.exports = function(sever) {
    // API Routes 
    const router = express.Router();
    sever.use('/api', router);

    // Todo Routes
    const todoService = require('../api/todo/todoservice');
    todoService.register(router, '/todos');
}