'use strict';
// import './mock';
import './config';
import {vista} from './bookView';
import {viewBook} from './bookContainer';


$(() =>{
    $('#bookContainer').append(viewBook.render().el);
});


$(() =>{
    $('#libraryContainer').append(vista.render().el);
});

