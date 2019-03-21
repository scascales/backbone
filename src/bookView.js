import {library} from './bookLibrary';
import bookData from './book.html';

const Vista = Backbone.View.extend({
    tagName: 'div',
    className: 'result',

    initialize: function() {
        this.listenTo(library, 'add', this.render);
    },

    template: _.template(bookData),

    render: function() {
        $('#libraryContainer').html(this.template(library.toJSON()));

        console.log(library.toJSON());


        return this;
    },
});

const vista = new Vista();

export {vista};
