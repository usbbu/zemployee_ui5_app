/*global QUnit*/

sap.ui.define([
	"com/employee/zemployeeui5app/controller/Employee.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Employee Controller");

	QUnit.test("I should test the Employee controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
