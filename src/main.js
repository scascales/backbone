'use strict';
// import './mock';
import './config';
import {Router} from './router';
import {Vista} from './views/library';
import {ViewBook} from './views/book';


$(() =>{
    window.router = new Router({
        views: {
            library: new Vista({
                el: $('#libraryContainer')[0],
            }),
            book: new ViewBook({
                el: $('#bookContainer')[0],
            }),
        },
    });
    Backbone.history.start();
});

