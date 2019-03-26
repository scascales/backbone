const Book = Backbone.Model.extend({
});

const Library = Backbone.Collection.extend({
    model: Book,
});


export {Library, Book};
