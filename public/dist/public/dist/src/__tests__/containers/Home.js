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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
const React = __importStar(require("react"));
const HomeScreen_1 = __importDefault(require("../../containers/HomeScreen"));
const renderer = __importStar(require("react-test-renderer"));
it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen_1.default navigation={[]}/>);
});
//# sourceMappingURL=Home.js.map