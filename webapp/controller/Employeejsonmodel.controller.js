sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.employee.zemployeeui5app.controller.Employeejsonmodel", {
        onInit() {
            var oModel = this.getOwnerComponent().getModel("oModel");
            var empMode = this.getOwnerComponent().getModel("empModel")
                 oModel.read("/EmployeeSet", {
                success:function(data){
                    for (var i = 0; i<data.results.length; i++) {
                        var jobLevel = "";
                       if (data.results[i].Desig === "DEVELOPER") {
                          jobLevel = "JL1";
                       } 
                       else if (data.results[i].Desig === "SENIOR DEVELOPER") {
                        jobLevel = "JL2";
                       }
                       else if (data.results[i].Desig === "TEAM LEAD") {
                        jobLevel = "JL3"
                       }
                       else if (data.results[i].Desig === "MANAGER") {
                        jobLevel = "JL4"
                       }
                       data.results[i].Desig = data.results[i].Desig + "("+ jobLevel +")";
                    }
                empMode.setData(data)
                }.bind(this)

            });

        }
    });
});