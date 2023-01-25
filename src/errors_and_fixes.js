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

String s = "Beyond the steady rock the steady sea";
String s2 = "In movement more immovable than station";
String s3 = "Gathers and washes and is gone";
String s4 = "A slow obscure metonymy of motion";
String s5 = "Crumbling the inner barriers of the brain";
String s6 = "But the crossed rock braces the hills";
String s7 = "A steady quiet";

//Hello, more comments
String s8 = "bad thing";

/* Adding comments to see what 'fix' v. 'open' will do in Command Center */
String s10 = i18n.getString("Hello Command Center");
String s11 = "Hello Command Center"; // $NON-NLS-L$

;

File image = olivier.png;

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
