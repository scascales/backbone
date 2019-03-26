import {library} from '../models/bookLibrary';
import libraryTmpl from './library.html';


const Vista = Backbone.View.extend({

    initialize: function() {
        this.listenTo(library, 'add', this.render);
        this.listenTo(library, 'reset', this.delete);
        this.listenTo(library, 'remove', this.render);
    },

    template: _.template(libraryTmpl),

    render: function() {
        const collection = library.toJSON();

        const result = _.mapValues(_.groupBy(collection, 'author'));

        console.log(collection);
        $(this.el).html(this.template(result));
    },

    delete: function() {
        $(this.el).empty();
    },

    react: function() {
        $(this.el).html(this.template(library.toJSON()));
    },
    deleteOneBook: function(event) {
        const index = $(event.target).data('index');
        const name = $(event.target).data('name');
        const result = _.mapValues(_.groupBy(library.toJSON(), 'author'));

        const libraryName = _.get(result, 'name');

        if (name == libraryName) {
            library.remove(library.at(index));
        }
    },

    /* orderBooks: function() {
        const collection = library.toJSON();
        const result = _.orderBy(collection, ['name'], ['asc']);

        $(this.el).empty();
        $(this.el).html(this.template(result));
        console.log(result);
    },

    groupBooks: function() {
    },*/

    events: {
        'click .deleteBook': 'deleteOneBook',
        /* 'click .orderBy': 'orderBooks',
        'click .groupBy': 'groupBooks',*/
    },

});

export {Vista};
