import {library} from '../models/bookLibrary';
import libraryTmpl from './library.html';
import libraryTmpl2 from './library2.html';

const Vista = Backbone.View.extend({

    initialize: function() {
        this.listenTo(library, 'add', this.render);
        this.listenTo(library, 'order', this.order);
    },

    template: _.template(libraryTmpl),

    template2: _.template(libraryTmpl2),

    render: function() {
        const collection = library.toJSON();

        const result = _.mapValues(_.groupBy(collection, 'author'));

        $(this.el).empty();
        $(this.el).html(this.template(result));
    },

    order: function() {
        const collection = library.toJSON();
        const result = _.orderBy(collection, ['name'], ['asc']);

        $(this.el).empty();
        $(this.el).html(this.template2(result));
    },


    events: {
        'click .order': 'order',
    },

});

export {Vista};
