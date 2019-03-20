import {library} from './bookLibrary';

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

export {vista};
