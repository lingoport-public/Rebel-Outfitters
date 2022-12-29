/* 
 * Copyright (c) 2016, Bruce Schubert.
 * The MIT License.
 */
"use strict";
require.config({
    baseUrl: 'js/',
    paths: {
        'QUnit': 'libs/qunit/qunit-1.21.0'
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});

String s = i18nUtil.getString("ID17");
String s2 ="Hello Command Center";
String s3 = "Hello Command Center";
String s4 = "Hello Command Center";
String s5 ="Hello Command Center";
String s6 ="Hello Command Center";
String s7 = "Hello Command Center";;
String s8 = "Hello Command Center";
String s10 = "Hello Command Center";
String s11 = "Hello Command Center";

// require the unit tests.
require([
    'QUnit',
    'tests/sun/SolarCalculatorTest'],
        function (QUnit, SolarCalculatorTest) {
            // Run the tests.
            SolarCalculatorTest.run();
            
            // Start QUnit.
            QUnit.load();
            QUnit.start();
        }
);
