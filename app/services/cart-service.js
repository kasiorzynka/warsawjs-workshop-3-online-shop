/**
 * Created by kfrackie on 05.02.2017.
 */
(function () {
    "use strict"

    function cartService() {
        let selectedProducts = {list: []};
        return {
            //get add->push
            get(){
                return selectedProducts;
            },
            addProduct(product){
                selectedProducts.list.push(product)
            },
            removeProduct(id){
                var foundIndex = selectedProducts.list.findIndex(function (element) {
                    return element.id == id;
                });
                selectedProducts.list.splice(foundIndex, 1);
            }

        }
    }

    angular.module('shop')
        .factory('add-to', cartService)

})();