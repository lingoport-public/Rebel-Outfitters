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
String s2 = i18nUtil.getString("ID17");
String s3 = i18nUtil.getString("ID17");
String s4 = i18nUtil.getString("ID17");

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
