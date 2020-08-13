const assert = require ('assert');
const proxyquire = require('proxyquire');


const {getAllStub, MongoLibMock } = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movie');

describe("services -movie " , function() {

    const MovieServices = proxyquire('../services/movie', {
        '../lib/mongo': MongoLibMock
    });

    const movieServices = new MovieServices();

    describe("when getMovies method is calles ", async function() {
        it('Should call the getAll MongoLib method', async function() {
            await movieServices.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('Should return an array of movies', async function() {
            const results = await movieServices.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(results, expected)
        })
    })
})

