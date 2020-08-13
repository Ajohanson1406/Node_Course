const sinon = require('sinon');

const { moviesMock, filteredMoviesMock } = require('../mocks/movie');


const getAllStub = sinon.stub();

getAllStub.withArgs('movies').resolves(moviesMock);

const tagAquery = { tags: { $in : ["Drama"] }}
getAllStub.withArgs('movies').resolves(filteredMoviesMock('Drama'));

const CreateStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query)
    }

    create(collection, data) {
        return CreateStub(collection, data)
    }
}

module.exports = {
    getAllStub,
    CreateStub,
    MongoLibMock
}