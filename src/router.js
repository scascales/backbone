

const Router = Backbone.Router.extend({
    routes: {
        '': 'book',
        'library': 'library',
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

    library() {
        this.views.library.render();
    },
});

export {Router};

