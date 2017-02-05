/**
 * Created by kfrackie on 05.02.2017.
 */

(function () {
    "use strict"

    function productService($http) {
        let products = {list: []};

        $http.get('http://localhost:2095/products').then(loadProducts);

        function loadProducts(response) {
            products.list = response.data;
        }

        return {
            get(){
                return products;
            },
        }
    }

    angular.module('shop')
        .factory('productService', productService)

})();