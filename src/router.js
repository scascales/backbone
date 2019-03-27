import './models/bookLibrary';

const Router = Backbone.Router.extend({
    routes: {
        '': 'book',
        'library(/:item)': 'library',
    },

    initialize(opts) {
        this.views = opts.views;
        this.on('route', this.changeView);
    },

    changeView(route) {
        const selectedView = _.get(this.views, route, {});

        _.each(this.views, (view) => view.$el.hide());

        selectedView.$el.show();
    },

    book() {
        this.views.book.render();
    },
    library: function(item) {
        if (item == 'render') {
            this.views.library.render();
        } else if (item == 'order') {
            this.views.library.order();
        }
    },

});

export {Router};

