"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const HomeScreen_1 = __importDefault(require("./containers/HomeScreen"));
const CartScreen_1 = __importDefault(require("./containers/CartScreen"));
console.disableYellowBox = true;
exports.App = react_navigation_1.TabNavigator({
    Home: {
        screen: HomeScreen_1.default,
        navigationOptions: {
            tabBarLabel: "Products"
        }
    },
    Cart: {
        screen: CartScreen_1.default,
        navigationOptions: {
            tabBarLabel: "Cart"
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#222',
    }
});
//# sourceMappingURL=App.js.map