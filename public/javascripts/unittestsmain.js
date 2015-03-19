"use strict";
require.config({
    paths: {
        'QUnit': 'lib/qunit/qunit-1.17.1',
        'blanket': 'lib/blanket/blanket.min',
        'jquery': 'lib/jquery/jquery-2.1.3.min',
        'Q':'lib/q/q',
        'knockout': 'lib/knockout/knockout-3.3.0',
        'moment': 'lib/moment/moment',
        'domain': 'app/data/domain',
        'services': 'app/data/services',
        'domaintest': 'test/data/domain'
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
       },
       'QUnit': {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
           }
       }
    }
});

// require the unit tests.
require(
    ['Q','jquery','knockout','QUnit', 'test/dummyTest', 'domaintest/baseitem'],
    function(Q,jquery,ko, QUnit, dummyTest,baseItemTest) {
        // run the tests.
        dummyTest.run();
        baseItemTest.run();
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);
