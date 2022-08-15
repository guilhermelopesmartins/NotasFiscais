sap.ui.define(['sap/m/SearchField', 'MyUIWebApp/model/formatter'], function(
  SearchField,
  formatter
) {
  'use strict';
  return SearchField.extend('MyUIWebApp.controls.CenterCostsSearch', {
    metadata: {
      properties: {
        dimension: { type: 'int', defaultValue: -1 }
      }
    },

    init: function() {},
    renderer: {}
  });
});
