"use strict";
require.config({
    paths: {
        'jquery': 'lib/jquery/jquery-2.1.3.min',
        'Q':'lib/q/q',
        'knockout': 'lib/knockout/knockout-3.3.0',
        'moment': 'lib/moment/moment'
    },
    shim: {
       'jquery': {
         exports: '$'
       },
       'Q': {
         exports: 'Q'
       },
       'knockout':{
         exports: 'ko'
       }
    }
});

// require the unit tests.
require(
    ['Q','jquery', 'knockout'],
    function(Q, jquery,ko) {
      //ko.applyBindings(new appViewModel());
    }
);
