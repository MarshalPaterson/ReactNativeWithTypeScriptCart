"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Button_1 = __importDefault(require("../components/Button"));
var List_1 = __importDefault(require("../components/List"));
var HomeScreen = /** @class */ (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeScreen.prototype.render = function () {
        var navigate = this.props.navigation.navigate;
        return (<react_native_1.View style={styles.container}>
                <react_native_1.Text>Retail Store</react_native_1.Text>
                <react_native_1.View style={styles.containerButtons}>
                    
                    
                    
                    
                    <Button_1.default label="Electronics"/>
                    <Button_1.default label="Furniture"/>
                </react_native_1.View>
                <react_native_1.View>
                    <List_1.default />
                </react_native_1.View>
            </react_native_1.View>);
    };
    return HomeScreen;
}(react_1.Component));
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    containerButtons: {
        flexDirection: 'row',
    },
});
exports.default = HomeScreen;
