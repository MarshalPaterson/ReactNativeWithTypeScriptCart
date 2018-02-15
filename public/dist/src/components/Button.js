"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_button_1 = __importDefault(require("react-native-button"));
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<react_native_1.View style={styles.container}>
                <react_native_button_1.default {...this.props} style={{
            alignItems: 'center',
            backgroundColor: (this.props.activeButton) ? "#94e794" : this.props.bgColor,
            padding: 10,
            width: this.props.width
        }} id={this.props.id} isActive={this.props.activeButton}>{this.props.label}</react_native_button_1.default>
            </react_native_1.View>);
    }
}
exports.default = Button;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
});
//# sourceMappingURL=Button.js.map