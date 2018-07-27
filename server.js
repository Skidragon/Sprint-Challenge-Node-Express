const codes = require('./data/helpers/statusCodes');

const express = require('express');

const server = express();


const actionRoutes = require('./api/actionRouter');
const projectRoutes = require('./api/projectRouter');

server.use(express.json());
server.use('/api/actions', actionRoutes);
server.use('/api/projects', projectRoutes);

server.use((err, req, res, next) => {

    const errorInfo = {
        ...err,
        success: false,
    }
    switch (errorInfo.code) {
        case codes.BAD_REQUEST: 
            res.json(codes.BAD_REQUEST).json(errorInfo);
            return;
        case codes.NOT_FOUND: 
            res.json(codes.NOT_FOUND).json(errorInfo);
            return;
        default:
        res.json(codes.INTERNAL_SERVER_ERROR).json(errorInfo);
    }
});

server.listen(8001);