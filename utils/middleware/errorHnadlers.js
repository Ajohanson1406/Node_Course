const boom = require('@hapi/boom')
const { config } = require('../../config/index');

function withErrorStack(error, stack){
    if(config.dev){
        return {...error, stack}
    }

    return error
}

function logErros(err, req, res, next){
    console.log(err);
    next(err)
}

function wrapErrors(err, req, res, next) {
    if(err.isBoom) {
        next(boom.badImplementation)
    }

    next(err)
}

function errorHandler(err, req, res, next){ //eslint-disiable-line
    const { output: { statusCode, payload} } = err;

    res.status(statusCode);
    res.json(withErrorStack(payload, err.stack))
}

module.exports = {
    logErros,
    wrapErrors,
    errorHandler
}