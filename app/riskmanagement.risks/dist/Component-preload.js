//@ui5-bundle riskmanagement/risks/Component-preload.js
sap.ui.require.preload({
	"riskmanagement/risks/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("riskmanagement.risks.Component",{metadata:{manifest:"json"}})});
},
	"riskmanagement/risks/i18n/i18n.properties":'# This is the resource bundle for riskmanagement.risks\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Risks Fiori Elements Application\n\n#YDES: Application description\nappDescription=Risks Fiori Elements Application\n\n#XFLD,48\nflpTitle=Risks Fiori Elements Application\n',
	"riskmanagement/risks/manifest.json":'{"_version":"1.60.0","sap.app":{"id":"riskmanagement.risks","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.6","toolsId":"5b50620c-5d05-48b8-bb31-f4c7ca5d2d01"},"dataSources":{"mainService":{"uri":"service/riskmanagementSvcs/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"riskmanagementrisks-display":{"semanticObject":"riskmanagementrisks","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.13","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"riskmanagement.risks.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"RisksList","target":"RisksList"},{"pattern":"Risks({key}):?query:","name":"RisksObjectPage","target":"RisksObjectPage"}],"targets":{"RisksList":{"type":"Component","id":"RisksList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Risks","variantManagement":"Page","navigation":{"Risks":{"detail":{"route":"RisksObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"RisksObjectPage":{"type":"Component","id":"RisksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Risks"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.riskmanagement"}}'
});
//# sourceMappingURL=Component-preload.js.map
