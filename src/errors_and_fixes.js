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
String s = i18nUtil.getMessage("ID_BEYON_1");
String s2 = "In movement more immovable than station";
String s2 = i18nUtil.getMessage("ID_IN_MOV_2");
//String s3 = "Gathers and washes and is gone";
String s3 = i18nUtil.getMessage("ID_GATH_WASH_3");
String s4 = "A slow obscure motion";
String s5 = i18nUtil.getMessage("ID_CRM_4");
String s6 = i18nUtil.getMessage("ID_CROSS_5");
String s7 = i18nUtil.getMessage("ID_QUIET_6");

//Hello, more comments
String s8 = "bad thing"; // $NON-NLS-L$

/* Adding comments to see what 'fix' v. 'open' will do in Command Center */
String s10 = i18n.getString("Hello Command Center");
String s11 = "Hello Command Center"; // $NON-NLS-L$

;

File image = i18n.getImage(olivier.png);

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
