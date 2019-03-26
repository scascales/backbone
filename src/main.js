'use strict';
// import './mock';
import './config';
import {Vista} from './bookView';
import {ViewBook} from './bookContainer';

$(() =>{
    const viewBook = new ViewBook({
        el: $('#bookContainer')[0],
    });

    $('#bookContainer').append(viewBook.render().el);
});

$(() => {
    new Vista({
        el: $('#libraryContainer')[0],
    });
});


