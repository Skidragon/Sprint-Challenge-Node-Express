const codes = require('./../data/helpers/statusCodes');

const express = require('express');
const actionModel = require('./../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res, next) => {
    actionModel.get()
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(err => {
        next(err);
    })
})
module.exports = router;