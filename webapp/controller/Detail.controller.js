sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.Detail", {
            onInit: function () {
                console.log('Detail::')
                
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oModel = this.getOwnerComponent().getModel();

            this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
            }
        });
    });
