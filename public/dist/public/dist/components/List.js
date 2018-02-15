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
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Button_1 = __importDefault(require("./Button"));
const ImageSource_1 = __importDefault(require("../utils/ImageSource"));
const Cart_1 = __importDefault(require("../services/Cart"));
class List extends React.Component {
    constructor(props) {
        super(props);
        this.addToCart = (i) => {
            this.props.addToCart(i);
        };
        this.showDetails = (i, openClose) => {
            this.props.showDetails(i, openClose);
        };
        this.showAddToCart = (isCart, item) => {
            if (isCart === false) {
                return <react_native_1.View key={"viewAddbtn"}>
                <Button_1.default key={"addbtn"} width={80} label={"Add to Cart"} bgColor={"#eee"} onPress={() => this.addToCart(item)} id={"AddToCart"} activeButton={false}/>
            </react_native_1.View>;
            }
        };
        this.deleteFromCart = (isCart, item) => {
            if (isCart === true) {
                return <react_native_1.View key={"viewAddbtn"}>
                <react_native_1.View><react_native_1.Text style={{ color: 'red' }} onPress={() => this.onDeleteFromCart(item)}>DEL</react_native_1.Text><react_native_1.TextInput /></react_native_1.View>
            </react_native_1.View>;
            }
        };
        this.onDeleteFromCart = (i) => {
            let cart = new Cart_1.default();
            cart.deleteFromCart(i);
        };
        this.state = { data: this.props.data };
        this.addToCart = this.addToCart.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }
    renderFlatListItem(item) {
        return <react_native_1.View style={{
            flex: 1,
            flexDirection: 'row',
            borderRadius: 4,
            borderColor: 'white',
            borderWidth: 1
        }} key={"parentView"}>
            {this.deleteFromCart(this.props.isCartList, item)}
            <react_native_1.TouchableOpacity key={"detailBtn"} onPress={() => this.showDetails(item, true)} style={{ flexDirection: 'row', flex: 1, padding: 8 }}>
                <react_native_1.View key={"image"} style={{ height: 80, width: 80, borderWidth: 1, backgroundColor: 'white', borderRadius: 2 }}>
                    {this.getImagePath(item.Name)}
                </react_native_1.View>
                <react_native_1.View key={"viewPrice"} style={{ padding: 8 }}>
                    <react_native_1.Text key={"name"}>{item.Name}</react_native_1.Text>
                    <react_native_1.Text key={"price"}>${item.Price}</react_native_1.Text>
                </react_native_1.View>
            </react_native_1.TouchableOpacity>
            {this.showAddToCart(this.props.isCartList, item)}
        </react_native_1.View>;
    }
    getImagePath(i) {
        return ImageSource_1.default.getImagePath(i);
    }
    render() {
        return (<react_native_1.View>
                <react_native_1.FlatList key={"flatlistexample"} data={this.props.data} renderItem={({ item }) => this.renderFlatListItem(item)}/>
            </react_native_1.View>);
    }
}
const styles = react_native_1.StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
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
exports.default = List;
//# sourceMappingURL=List.js.map