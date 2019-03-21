import {Book} from './bookLibrary';
import {library} from './bookLibrary';

const ViewBook = Backbone.View.extend({

    addBook: function(e) {
        e.preventDefault();
        const book = new Book({});

        book.set('author', this.$el.find('input[name="author"]').val());
        book.set('name', this.$el.find('input[name="name"]').val());
        library.add(book);

        return this;
    },

    render: function() {
        this.$el.html(`<form id="book">`+
            `<input type="text" placeholder="Author" name="author">`+
            `<input type="text" placeholder="Name" name="name">`+
            `<input class=submit type="submit" value="Submit">`+
            `</form>`);

        return this;
    },
    events: {
        'click .submit': 'addBook',
    },


});

const viewBook = new ViewBook();

export {viewBook};


