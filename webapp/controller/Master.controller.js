sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.Master", {
            onInit: function () {
                const oViewModel = new JSONModel(
                  "./localService/mockdata/SubProjects.json"
                );
                var oModel = new JSONModel("../localService/mockdata/SubProjects.json");
                this.getView().setModel(oModel,"results");
                // this._bDescendingSort = false;
                // oView.setModel(oMaterialModel, "materialModel");
                
                this.oRouter = this.getOwnerComponent().getRouter();
                console.log('MASTER::',oModel)
                // this._oTable.getBinding("items").attachChange(this._onTableChange, this);
            },

            // _onTableChange: function () {
        
            //     var oTable = this.byId("list");
            //     var oBinding = oTable.getBinding("items");
            //     var iItemCount = oBinding.getLength();
            //     var oModel = this.getView().getModel("results");
            //     oModel.setProperty("/itemCount", iItemCount);
            //     },
        });
    });
