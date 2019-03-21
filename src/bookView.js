import {library} from './bookLibrary';
import bookData from './book.html';

const Vista = Backbone.View.extend({
    tagName: 'div',
    className: 'result',

    initialize: function() {
        this.listenTo(library, 'add', this.render);
        this.listenTo(library, 'reset', this.delete);
        this.listenTo(library, 'deleteBook', this.removeBook);
    },

    template: _.template(bookData),

    render: function() {
        $('#libraryContainer').html(this.template(library.toJSON()));

        console.log(library.toJSON());

        return this;
    },

    delete: function() {
        $('#libraryContainer').empty();
    },

});

const vista = new Vista();

export {vista};
