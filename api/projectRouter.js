const codes = require('./../data/helpers/statusCodes');

const express = require('express');
const projectModel = require('./../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res, next) => {
    projectModel.get()
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(() => {
        next({
            code: codes.INTERNAL_SERVER_ERROR,
            message: 'Problem getting projects, try again later'
        })
    });
});

module.exports = router;