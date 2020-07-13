const express = require('express')
const { moviesMock } = require('../utils/mocks/movie')

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async function(req, res, next) {
        try{
            const movies = await Promise.resolve(moviesMock)
            res.status(200).json({
                data: movies,
                message: 'Movies listed'
            })
        }catch(err) {
            next(err)
        }
    })

    router.get('/:movieId', async function(req, res, next) {
        try{
            const movies = await Promise.resolve(moviesMock[0])
            res.status(200).json({
                data: movies,
                message: 'Movies retrieve'
            })
        }catch(err) {
            next(err)
        }
    })

    router.post('/', async function(req, res, next) {
        try{
            const createMovieId = await Promise.resolve(moviesMock[0].id)
            res.status(201).json({
                data: createMovieId,
                message: 'Movie create'
            })
        }catch(err) {
            next(err)
        }
    })

    router.put('/:movieId', async function(req, res, next) {
        try{
            const updatedMovieId = await Promise.resolve(moviesMock[0].id)
            res.status(200).json({
                data: updatedMovieId,
                message: 'Movie updated'
            })
        }catch(err) {
            next(err)
        }
    })

    router.delete('/', async function(req, res, next) {
        try{
            const Deletemovies = await Promise.resolve(moviesMock[0].id)
            res.status(200).json({
                data: Deletemovies,
                message: 'Movies deleted'
            })
        }catch(err) {
            next(err)
        }
    })
}


module.exports = moviesApi;