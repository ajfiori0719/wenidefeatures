/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"oft/demo/DemoTemplateWIF/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});