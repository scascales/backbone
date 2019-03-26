import {Book} from '../models/bookLibrary';
import {library} from '../models/bookLibrary';
import bookTmpl from './book.html';

const ViewBook = Backbone.View.extend({

    template: _.template(bookTmpl),
    addBook: function(e) {
        e.preventDefault();

        const nombre = this.$el.find('input[name="name"]').val().trim();
        const autor = this.$el.find('input[name="author"]').val().trim();

        if (nombre == '' || nombre == undefined || autor == '' || autor == undefined) {
            return this;
        } else {
            const book = new Book({});

            book.set('author', autor);
            book.set('name', nombre);
            library.add(book);

            return this;
        }
    },

    deleteAll: function() {
        library.reset();
    },


    render: function() {
        $(this.el).html(this.template());

        return this;
    },
    events: {
        'click .submit': 'addBook',
        'click .reset': 'deleteAll',
    },


});

export {ViewBook};

