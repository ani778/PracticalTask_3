sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "project1/model/models",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/HashChanger",
    "sap/f/FlexibleColumnLayoutSemanticHelper",
    "sap/f/library"
], function (UIComponent, Device, models, JSONModel, HashChanger, FlexibleColumnLayoutSemanticHelper, FCLibrary,library) {
    "use strict";


    var Component = UIComponent.extend("project1.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            HashChanger.getInstance().replaceHash("");

            UIComponent.prototype.init.apply(this, arguments);

            var oModel = new JSONModel();
            this.setModel(oModel);
            
            this.getRouter().initialize();
            
            this.setModel(models.createDeviceModel(), "device");
        },
        
        getHelper: function () {
            var LayoutType = FCLibrary.LayoutType;
            console.log('COMPONENT:::', LayoutType) 
            var oFCL = this.getRootControl().byId("fcl"),
                oParams = new URLSearchParams(window.location.search),
                oSettings = {
                    defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
                    defaultThreeColumnLayoutType: LayoutType.ThreeColumnsMidExpanded,
                    mode: oParams.get("mode"),
                    maxColumnsCount: oParams.get("max")
                };

            return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
        }
    });

    return Component;
});
