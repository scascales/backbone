const Book = Backbone.Model.extend({

});

const Library = Backbone.Collection.extend({
    model: Book,
});

const library = new Library();


export {library, Book};
