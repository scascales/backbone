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

    deleteAll: function() {
        library.reset();
    },

    render: function() {
        this.$el.html(`<form id="book">`+
            `<input type="text" placeholder="Author" name="author">`+
            `<input type="text" placeholder="Name" name="name">`+
            `<input class="submit" type="submit" value="Submit">`+
            `<input class="reset" type="reset" value="Reset">`+
            `</form>`);

        return this;
    },
    events: {
        'click .submit': 'addBook',
        'click .reset': 'deleteAll',
    },


});

const viewBook = new ViewBook();

export {viewBook};


