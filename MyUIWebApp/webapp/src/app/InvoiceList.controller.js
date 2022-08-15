sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/model/Filter', 'sap/ui/model/FilterOperator'],
  function(Controller, Filter, FilterOperator) {
    'use strict';

    return Controller.extend('MyUIWebApp.src.app.InvoiceList', {
      onFilterInvoices: function(oEvent) {
        // Build filter array
        var aFilter = [];
        var sQuery = oEvent.getParameter('query');
        if (sQuery) {
          aFilter.push(new Filter('title', FilterOperator.Contains, sQuery));
        }

        // Filter binding
        var oList = this.byId('invoiceList');
        var oBinding = oList.getBinding('items');
        oBinding.filter(aFilter);
      },

      onPress: function(oEvent) {
        var oItem = oEvent.getSource();
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo('detail', {
          invoicePath: window.encodeURIComponent(
            oItem
              .getBindingContext('invoice')
              .getPath()
              .substr(1)
          )
        });
      }
    });
  }
);
