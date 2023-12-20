sap.ui.define([
	"sap/ui/core/util/MockServer"
], (MockServer) => {
	"use strict";

	return {
		init: () => {
			var oMockServer = new MockServer({
				rootUri: "/"
			});
			oMockServer.simulate("../localService/metadata.xml", {
                sMockdataBaseUrl: "../localService/mockdata/SubProjects.json",
				bGenerateMissingMockData: true
			});
            console.log('MOCKSERVER::::')

			// simulate
			// const sPath = sap.ui.require.toUrl("ui5/walkthrough/localService");
			// oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			oMockServer.start();
		}
	};
});
