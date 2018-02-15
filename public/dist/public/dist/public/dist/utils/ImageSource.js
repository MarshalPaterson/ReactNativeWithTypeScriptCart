"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
class ImageSource {
    // Error: require() must have a single string literal arguments
    // https://github.com/facebook/react-native/issues/7015
    static getImagePath(i) {
        switch (i) {
            case 'Microwave oven':
                return <react_native_1.Image key={"image"} style={styles.imageContainer} source={require('../assets/Microwave.jpg')}/>;
            case 'Television':
                return <react_native_1.Image key={"image"} style={styles.imageContainer} source={require('../assets/TV.jpg')}/>;
            case 'Vacuum Cleaner':
                return <react_native_1.Image key={"image"} style={styles.imageContainer} source={require('../assets/VacuumCleaner.jpg')}/>;
            case 'Table':
                return <react_native_1.Image key={"image"} style={styles.imageContainer} source={require('../assets/Table.jpg')}/>;
            case 'Chair':
                return <react_native_1.Image key={"image"} style={styles.imageContainer} source={require('../assets/Chair.jpg')}/>;
            case 'Almirah':
                return <react_native_1.Image key={"image"} style={styles.imageContainer} source={require('../assets/Almirah.jpg')}/>;
            default:
                return <react_native_1.Image source={require('../assets/TV.jpg')}/>;
        }
    }
}
exports.default = ImageSource;
const styles = react_native_1.StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    imageContainer: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }
});
//# sourceMappingURL=ImageSource.js.map