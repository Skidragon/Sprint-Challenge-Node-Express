const codes = require('./data/helpers/statusCodes');

const express = require('express');

const server = express();


const actionRoutes = require('./api/actionRouter');
const projectRoutes = require('./api/projectRouter');

server.use(express.json());
server.use('/api/actions', actionRoutes);
server.use('/api/projects', projectRoutes);

server.use((err, req, res, next) => {
    err.code = err.code !== undefined ? err.code : codes.INTERNAL_SERVER_ERROR;
    const errorInfo = {
        status: err.code,
        errorMessage: err.message,
        success: false,
        route: err.route
    }
    switch (errorInfo.code) {
        case codes.BAD_REQUEST: 
            res.status(codes.BAD_REQUEST).json(errorInfo);
            return;
        case codes.NOT_FOUND: 
            res.status(codes.NOT_FOUND).json(errorInfo);
            return;
        default:
        res.status(codes.INTERNAL_SERVER_ERROR).json(errorInfo);
    }
});

server.listen(8001);