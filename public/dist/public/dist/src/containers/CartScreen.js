"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Cart_1 = __importDefault(require("../services/Cart"));
const List_1 = __importDefault(require("../components/List"));
const Detail_1 = __importDefault(require("../components/Detail"));
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
class CartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.showDetails = (i, openClose) => {
            this.setState({ open: openClose, productDetail: i });
        };
        this.state = {
            label: "",
            products: [],
            bgColor: "#DDDDDD",
            activeButtonElectronics: true,
            activeButtonFurniture: false,
            open: false,
            productDetail: null
        };
        this.showDetails = this.showDetails.bind(this);
    }
    getCartItems() {
        return __awaiter(this, void 0, void 0, function* () {
            let cart = new Cart_1.default();
            return cart.getAllItems();
        });
    }
    checkValidJSON(text) {
        try {
            if (text !== "") {
                if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        catch (e) {
            return false;
        }
    }
    sumOfProducts() {
        let s = this.state.products;
        let t = 0.00;
        for (let i = 0; i < s.length; i++) {
            t = t + Number(s[i].Price);
        }
        return Number(t).toFixed(2);
    }
    componentDidUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fitlerProducts();
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fitlerProducts();
        });
    }
    fitlerProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = [];
            let c = yield this.getCartItems();
            for (let i = 0; i < c[0].length; i++) {
                if (this.checkValidJSON((c[0][i].value).toString())) {
                    data.push(JSON.parse(c[0][i].value));
                }
            }
            let a = data;
            this.setState({
                products: a
            });
        });
    }
    render() {
        return (<react_native_1.View style={styles.container}>
                <react_native_1.Text style={styles.titleSubText}>Cart Items</react_native_1.Text>
                <react_native_1.View style={{ backgroundColor: '#F5F5F5', borderRadius: 6, height: height - 90 }}>
                    <List_1.default data={this.state.products} isCartList={true} showDetails={this.showDetails}/>
                </react_native_1.View>
                <react_native_1.View style={{
            backgroundColor: '#F5F5F5', borderRadius: 6, position: 'absolute',
            height: 40,
            left: -10,
            top: height - 120,
            paddingTop: 8,
            width: width
        }}>
                    <react_native_1.Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>TOTAL:
                        ${this.sumOfProducts()}</react_native_1.Text>
                </react_native_1.View>
                <Detail_1.default open={this.state.open} product={this.state.productDetail} showDetails={this.showDetails}/>
            </react_native_1.View>);
    }
}
exports.default = CartScreen;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 12,
        margin: 12,
        top: 20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8
    },
    titleSubText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8
    },
});
//# sourceMappingURL=CartScreen.js.map