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
var data_json_1 = __importDefault(require("../data.json"));
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        return _super.call(this, props) || this;
    }
    List.prototype.renderFlatListItem = function (item) {
        react_native_1.Alert.alert(String(item.Name).toString());
        return (<react_native_1.View key={"parentView"}>
                <react_native_1.Text key={"topicCat"}>{item.Name}</react_native_1.Text>
            </react_native_1.View>);
    };
    List.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View>
                    <react_native_1.FlatList key={"flatlistexample"} data={data_json_1.default} renderItem={function (_a) {
            var item = _a.item;
            return _this.renderFlatListItem(item);
        }}/>
                </react_native_1.View>);
    };
    return List;
}(react_1.Component));
var styles = react_native_1.StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }
});
exports.default = List;
