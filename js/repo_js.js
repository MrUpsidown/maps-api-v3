// JSFiddle repo js

$(function() {

    console.log('ready');

    $('textarea').focus(function() {

        console.log('select');
        this.select();
    });
});
