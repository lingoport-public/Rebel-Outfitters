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

//Hello, more comments
String s18 = "Welcome to Command Center. Please enter your licensing information"; 
String s20 = "Please configure the Notification Email in the Settings page."; 

String s = i18nUtil.getMessage("ID_BEYON_1");
String s2 = i18nUtil.getMessage("ID_IN_MOV_2");

String s3 = "Cannot find users with this filter";
String s4 = "PROG_ID"; // $NON-NLS-L$
String s5 = i18nUtil.getMessage("ID_CRM_4");
String s6 = i18nUtil.getMessage("ID_CROSS_5");
String s7 = i18nUtil.getMessage("ID_QUIET_6");

/* Adding comments to see what 'fix' v. 'open' will do in Command Center */
// String s10 = i18n.getString("Hello Command Center");
String s10 = "Return to Command Center Home Page";
String s11 = "Command Center"; // $NON-NLS-L$


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
