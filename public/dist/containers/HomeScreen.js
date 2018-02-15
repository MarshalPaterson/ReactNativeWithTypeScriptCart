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
const Button_1 = __importDefault(require("../components/Button"));
const Detail_1 = __importDefault(require("../components/Detail"));
const List_1 = __importDefault(require("../components/List"));
const Products_1 = __importDefault(require("../services/Products"));
const Cart_1 = __importDefault(require("../services/Cart"));
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.addToCart = (i) => {
            let cart = new Cart_1.default();
            cart.addToCart(i);
        };
        this.showDetails = (i, openClose) => {
            this.setState({ open: openClose, productDetail: i });
        };
        this.state = { label: "", products: [], bgColor: "#DDDDDD", activeButtonElectronics: true, activeButtonFurniture: false,
            open: false, productDetail: null };
        this.filterProducts = this.filterProducts.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }
    getProducts(filterBy) {
        let products = new Products_1.default();
        return products.getProducts().filter(product => product["Category"] === filterBy);
    }
    filterProducts(filterBy) {
        let filtered = this.getProducts(filterBy);
        this.setState({
            products: filtered,
            activeButtonElectronics: (filterBy === "Electronics") ? true : false,
            activeButtonFurniture: (filterBy === "Furniture") ? true : false
        });
    }
    componentDidMount() {
        this.filterProducts('Electronics');
        this.setState({
            activeButtonElectronics: true,
            activeButtonFurniture: false
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<react_native_1.View style={styles.container}>
                <react_native_1.Text style={styles.titleText}>~ Retail Store ~</react_native_1.Text>
                <react_native_1.View style={styles.containerButtons}>
                    <Button_1.default id="Electronics" onPress={() => this.filterProducts('Electronics')} label="Electronics" bgColor={this.state.bgColor} activeButton={this.state.activeButtonElectronics}/>
                    <Button_1.default id="Furniture" onPress={() => this.filterProducts('Furniture')} label="Furniture" bgColor={this.state.bgColor} activeButton={this.state.activeButtonFurniture}/>
                </react_native_1.View>
                <react_native_1.View style={{ backgroundColor: '#F5F5F5', borderRadius: 6 }}>
                    <List_1.default data={this.state.products} addToCart={this.addToCart} isCartList={false} showDetails={this.showDetails}/>
                </react_native_1.View>
                <Detail_1.default open={this.state.open} product={this.state.productDetail} showDetails={this.showDetails} addToCart={this.addToCart}/>
            </react_native_1.View>);
    }
}
exports.default = HomeScreen;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 12,
        margin: 12
    },
    containerButtons: {
        flexDirection: 'row',
        margin: 6
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8
    },
});
//# sourceMappingURL=HomeScreen.js.map