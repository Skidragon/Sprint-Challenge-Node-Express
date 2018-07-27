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
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    projectModel.get(id)
    .catch(() => {
        res.status(codes.NOT_FOUND).json({ message: 'Could not find project with that id'});
    })
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(() => {
        next({
            code: codes.INTERNAL_SERVER_ERROR,
            message: 'Could not get project at this time',
        })
    });
});
router.post('/', (req, res, next) => {
    projectModel.insert(req.body)
    .then(response => {
        res.status(codes.CREATED).json(response);
    })
    .catch(() => {
        next({
            code: codes.INTERNAL_SERVER_ERROR,
            message: 'Could not create project at this time',
        })
    })
});

router.put('/:id', (req,res,next) => {
    const { id } = req.params;
    projectModel.update(id, req.body)
    .then(response => {
        if(response === null) {
            throw codes.NOT_FOUND
        }
        res.status(codes.OK).json(response);
    })
    .catch((err) => {
        
        next({
            code: err,
            message: 'Could not update project at this time',
        })
    })
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    projectModel.remove(id)
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(() => {
        next({
            code: codes.INTERNAL_SERVER_ERROR,
            message: 'Could not delete project at this time'
        })
    })
})
module.exports = router;