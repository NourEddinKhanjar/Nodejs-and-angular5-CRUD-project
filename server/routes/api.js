const express = require('express');
const router = express.Router();
const userRoutes = require('./user');

router.get('/', function(req, res, next) {
    res.json('Node js router is working');
});

router.use("/users", userRoutes);

module.exports = router;