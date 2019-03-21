const Book = Backbone.Model.extend({
    defaults: {
        author: null,
        name: null,
    },
});

const Library = Backbone.Collection.extend({
    model: Book,
});

const library = new Library();


export {library, Book};
