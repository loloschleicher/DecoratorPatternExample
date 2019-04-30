"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var coffeeDecorator_1 = require("./coffeeDecorator");
var Sugar = /** @class */ (function (_super) {
    __extends(Sugar, _super);
    function Sugar(beverage) {
        var _this = _super.call(this) || this;
        _this.decoratedCoffee = beverage;
        return _this;
    }
    Sugar.prototype.getDescription = function () {
        return this.decoratedCoffee.getDescription() + ', Sugar';
    };
    Sugar.prototype.cost = function () {
        return this.decoratedCoffee.cost() + 0.20;
    };
    return Sugar;
}(coffeeDecorator_1.CoffeeDecorator));
exports.Sugar = Sugar;
