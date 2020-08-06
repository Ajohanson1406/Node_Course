const moviesMock = [
    {"id":"eccf1fcc-fc9b-40b7-8281-06df7eb844cf","title":"Song of the Bloodred Flower (Laulu tulipunaisesta kukasta)","year":1991,"cover":"http://dummyimage.com/115x153.png/ff4444/ffffff","description":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","duration":76,"contentRating":null,"source":"https://unc.edu/etiam/pretium/iaculis/justo/in/hac.jpg","tags":["Comedy|Drama|Romance","Comedy|Fantasy","Drama","Drama"]},
{"id":"f5e14c90-b6f2-4007-a991-5734a199bf6b","title":"3000 Miles to Graceland","year":2012,"cover":"http://dummyimage.com/236x198.jpg/dddddd/000000","description":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","duration":1,"contentRating":null,"source":"https://live.com/pede/justo/eu/massa/donec.xml","tags":["Horror|Thriller","Crime|Film-Noir|Romance"]},
{"id":"8d6f13cd-ec27-4a48-a829-1b6b022800cd","title":"Dark Lurking, The","year":2008,"cover":"http://dummyimage.com/171x151.bmp/cc0000/ffffff","description":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","duration":92,"contentRating":null,"source":"https://tuttocitta.it/vestibulum/ante/ipsum/primis.aspx","tags":["Comedy|Drama|Romance","Animation|Children|Fantasy|Musical","Comedy|Drama|Romance","Comedy","Adventure|Children|Comedy|IMAX"]},
{"id":"f83df65d-8bf0-424c-a455-08031cd751b4","title":"Two Lovers","year":2008,"cover":"http://dummyimage.com/149x148.png/5fa2dd/ffffff","description":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","duration":41,"contentRating":null,"source":"https://webeden.co.uk/mattis/pulvinar/nulla/pede/ullamcorper.aspx","tags":["Comedy","Comedy|Musical","Comedy|Drama"]},
{"id":"41879473-fe9a-4fd1-a4cf-cf0eb5986db1","title":"Shaolin Soccer (Siu lam juk kau)","year":1964,"cover":"http://dummyimage.com/152x133.bmp/cc0000/ffffff","description":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","duration":49,"contentRating":null,"source":"https://forbes.com/eget.json","tags":["Action|Comedy","Drama","Comedy|Drama|Mystery"]},
{"id":"d0750a91-a11a-47c6-9569-25c06adb1e74","title":"Winter Soldier","year":1984,"cover":"http://dummyimage.com/132x172.bmp/cc0000/ffffff","description":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","duration":95,"contentRating":null,"source":"https://princeton.edu/sapien/iaculis/congue.jsp","tags":["Action|Drama|War"]},
{"id":"8b70d6c1-bafd-48a1-bdf8-24a30efe50ed","title":"Sailor of the King","year":2004,"cover":"http://dummyimage.com/162x154.bmp/dddddd/000000","description":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.","duration":5,"contentRating":null,"source":"https://cnet.com/dui/maecenas/tristique/est/et.jpg","tags":["Comedy|Crime","Comedy","Comedy|Drama","Crime|Drama|Mystery"]},
{"id":"60b35c5a-4c03-474c-b53d-7fe4a5799b6c","title":"Last Chance: Diary of Comedians, The (Bokutachi no koukan nikki)","year":1990,"cover":"http://dummyimage.com/150x196.bmp/ff4444/ffffff","description":"In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","duration":29,"contentRating":null,"source":"https://weibo.com/augue/vestibulum/ante.js","tags":["Drama|Romance","Comedy|Drama|Mystery","Comedy|Musical|Romance","Drama"]},
{"id":"039a435d-3cdb-44f2-935b-0b139cfbefda","title":"Gold Raiders","year":2012,"cover":"http://dummyimage.com/124x220.bmp/cc0000/ffffff","description":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","duration":10,"contentRating":null,"source":"https://about.com/eget/tincidunt.jsp","tags":["Crime|Drama"]},
{"id":"026d8e08-7648-4dbf-9191-c62ee28f09b7","title":"Catfish","year":2003,"cover":"http://dummyimage.com/234x221.bmp/cc0000/ffffff","description":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","duration":98,"contentRating":null,"source":"http://g.co/rutrum/nulla/tellus.json","tags":["Drama","Action|Drama|Thriller","Action|Adventure|Comedy","Comedy|Drama|Romance","Crime|Horror|Mystery|Thriller"]}
]

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag))
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock)
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0])
    }
}


module.exports = { 
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock 
}