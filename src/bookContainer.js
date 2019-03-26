import {Book} from './bookLibrary';
import {Library} from './bookLibrary';

const ViewBook = Backbone.View.extend({


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
        $(this.el).html(`<input type="text" placeholder="Author" name="author">`+
            `<input type="text" placeholder="Name" name="name">`+
            `<input class="submit" type="submit" value="Submit">`+
            `<input class="reset" type="reset" value="Reset">`);

        return this;
    },
    events: {
        'click .submit': 'addBook',
        'click .reset': 'deleteAll',
    },


});

const library = new Library();

export {library};
export {ViewBook};


