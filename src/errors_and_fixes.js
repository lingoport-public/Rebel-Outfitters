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
String s2 = i18nUtil.getString("TITLE-S2");
String s3 = i18n.getString("TST_32");
String s4 = i18n.getString("CC_LOG_MAINT");
String s5 = i18n.getString("CC_LOG_MAINT");
String s6 = i18n.getString("CC_LOG_MAINT");
String s7 = i18n.getString("CC_LOG_MAINT");


//Hello, more comments
String s8 = "Hello Command Center, how are you?";

/* Adding comments to see what 'fix' v. 'open' will do in Command Center */
String s10 = i18n.getString("Hello Command Center");
String s11 = "Hello Command Center"; // $NON-NLS-L$

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
