sap.ui.define([
	"./flpSandbox",
	"sap/ui/fl/FakeLrepConnectorLocalStorage",
	"sap/m/MessageBox",
	"project1/localService/mockserver"
], function (flpSandbox, FakeLrepConnectorLocalStorage, MessageBox,mockserver) {
	"use strict";

	mockserver.init();

	console.log('INIT:::::')
	sap.ui.require(["sap/ui/core/ComponentSupport"]);

	
});