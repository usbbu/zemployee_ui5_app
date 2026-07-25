sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/employee/zemployeeui5app/model/formatter"
], (Controller,formatter) => {
    "use strict";

    return Controller.extend("com.employee.zemployeeui5app.controller.Formatter", {
        f:formatter,
        onInit() {
        }
    });
});