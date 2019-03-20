'use strict';
const module = require('./module');

$(()=>{
    const Book = Backbone.Model.extend({

    });

    const Library = Backbone.Collection.extend({
        model: Book,
    });
    const library = new Library();


    module.exports = library;

    (function() {
        const Vista = Backbone.View.extend({
            tagName: 'div',
            className: 'result',
            title: 'Libro',

            initialize: function() {
                this.listenTo(library, 'add', this.render);
            },

            render: function() {
                let html = '';
                let contador = 1;
                library.forEach((book) => {
                    html += `<br/> ${this.title} ${contador++}
                        <br/>
                        Author: ${book.get('author')}
                        <br/>
                        Name: ${book.get('name')}
                        <br/>
                    `;
                });

                $(this.el).html(html);
                return this;
            },
        });

        const vista = new Vista({});

        $(() =>{
            $('#libraryContainer').append(vista.render().el);
        });

        module.exports = vista;
    })();

    (function() {
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
        module.exports = viewBook;
        $(() =>{
            $('#bookContainer').append(viewBook.render().el);
        });
    })();


    console.log(module.name);
})();

