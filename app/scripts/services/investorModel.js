'use strict';

angular.module('crunchinatorApp.models').factory('InvestorModel', function(Model, API_BASE_URL) {
    return Model.extend({
        _attributes: {
            id: -1,
            name: ''
        }
    }, {
        url: API_BASE_URL + '/investors.json',
        parse: function(response) {
            return response.investors;
        }
    });
});