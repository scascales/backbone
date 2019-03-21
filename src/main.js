'use strict';
// import './mock';
import './config';
import {Vista} from './bookView';
import {viewBook} from './bookContainer';

$(() =>{
    $('#bookContainer').append(viewBook.render().el);
});

$(() => {
    new Vista({
        el: $('#libraryContainer')[0],
    });
});


