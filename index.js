const express = require ('express');


const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies');
const { util } = require('prettier');

const { logErros, wrapErrors, errorHandler } = require('./utils/middleware/errorHnadlers');

const notFoundHandler = require ('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

//routes
moviesApi(app);

//Catcch 404
app.use(notFoundHandler);


//Error middleware
app.use(logErros);
app.use(wrapErrors)
app.use(errorHandler)




app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`)
});