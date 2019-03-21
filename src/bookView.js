import {library} from './bookLibrary';
import bookData from './book.html';
import byAuthor from './book.html';
import byName from './book.html';

const Vista = Backbone.View.extend({

    initialize: function() {
        this.listenTo(library, 'add', this.render);
        this.listenTo(library, 'reset', this.delete);
        this.listenTo(library, 'remove', this.deleteReact);
        this.listenTo(library, 'groupBy', this.orderReact);
    },

    template: _.template(bookData),

    render: function() {
        const collection = library.toJSON();
        $(this.el).html(this.template(collection));
    },

    delete: function() {
        $(this.el).empty();
    },

    deleteReact: function() {
        $(this.el).html(this.template(library.toJSON()));
    },

    deleteOneBook: function(event) {
        const index = $(event.target).data('index');
        library.remove(library.at(index));
    },

    orderReact: function() {
        $(this.el).html(this.template(library.toJSON()));
    },
    orderBooks: function(e) {
        const collection = library.toJSON();
        if (byAuthor.check) {
            library.groupBy(collection.get('author'));
        } else if (byName.check) {
            library.orderBy(collection.get('name'));
        }
    },

    events: {
        'click .deleteBook': 'deleteOneBook',
        'change .orderBy': 'orderBooks',
    },

});

export {Vista};
