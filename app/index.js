(function () {
    "use strict"

    // angular.module('shop', []) /* Deklaracja modułu angular */
    /*  1. Drzewo komponentów
     2. Koszyk, dodawanie do koszyka, usuwanie produktów...
     Komponent sklepu: 3 divy, wyszukiwanie, lista produktów, koszyk
     */
    class ShopComponent {
        constructor() {
            this.template = `
                    <div class="shop-container">
                        <div class="products-container">
                            <navbar></navbar>
                            <product-list></product-list>
                        </div>
                        <cart></cart>
                    </div>`;

        }
    }

    class ProductListComponent {
        constructor() {
            this.controller = function (productService) {
                this.products = productService.get();
            }
            this.template = `
            <div> <product ng-repeat="product in $ctrl.products.list track by product.id" product="product"></product></div>
            `
        }

    }

    class ProductComponent {
        constructor() {
            this.bindings = {
                product: '<'
            }
            this.template = `
                <div>
                <img src="{{$ctrl.product.image}}"
                    <h1>{{$ctrl.product.name}}</h1><br>
                    {{$ctrl.product.description}}<br>
                <button class="btn btn-primary" ng-click="$ctrl.addToCart()">Add to cart</button>                       
            </div>          
            `;
            this.controller = function () {
                this.AddToCart = () => {
                }
            }
        }
    }

    angular.module('shop', [])
        .component('shopMainComponent', new ShopComponent())
        .component('productList', new ProductListComponent())
        .component('product', new ProductComponent())

})();
