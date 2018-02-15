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
const react_native_simple_modal_1 = __importDefault(require("react-native-simple-modal"));
const react_native_1 = require("react-native");
const ImageSource_1 = __importDefault(require("../utils/ImageSource"));
const Button_1 = __importDefault(require("./Button"));
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.addToCart = (i) => {
            this.props.addToCart(i);
        };
        this.showDetails = (i, openClose) => {
            this.setState({ open: openClose, productDetail: i });
            this.props.showDetails(i, openClose);
        };
        this.showDetails = this.showDetails.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }
    showAddToCart() {
        if (this.props.addToCart)
            return <Button_1.default width={undefined} label={"Add to Cart"} bgColor={"#DDDDDD"} onPress={() => this.addToCart((this.props.product) ? this.props.product : undefined)} id={"AddToCart"} activeButton={false}/>;
    }
    render() {
        return (<react_native_simple_modal_1.default offset={0} open={this.props.open} overlayBackground={'#FFFFFF'} animationDuration={200} animationTension={40} modalDidOpen={() => undefined} modalDidClose={() => undefined} closeOnTouchOutside={false} containerStyle={{
            justifyContent: 'center'
        }} modalStyle={{
            borderRadius: 12,
            margin: 20,
            padding: 10,
            backgroundColor: '#F5F5F5'
        }} disableOnBackPress={false}>
                <react_native_1.View style={{ height: 370 }}>
                    <react_native_1.TouchableOpacity style={{ margin: 5, top: 0, right: 0, alignSelf: 'flex-end' }} onPress={() => this.showDetails(null, false)}>
                        <react_native_1.Text style={{ fontSize: 16 }}> X </react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.Text style={{
            fontSize: 24, marginBottom: 10, fontWeight: "bold", position: 'absolute',
            left: 0,
            top: 0,
        }}>Detail</react_native_1.Text>
                    <react_native_1.View>
                        <react_native_1.View key={"image"} style={{
            height: 170,
            padding: 8,
            borderWidth: 1,
            backgroundColor: 'white',
            borderRadius: 2
        }}>{ImageSource_1.default.getImagePath((this.props.product) ? this.props.product.Name : "")}</react_native_1.View>
                        <react_native_1.Text key={"decs"}>Lorem ipsum dolor sit amet, ut eos tantas integre persequeris, quo etiam
                            docendi in, ea recteque pertinacia duo. Ad cum magna adhuc, has scaevola vivendum te, ius ei
                            laboramus abhorreant.</react_native_1.Text>
                        <react_native_1.Text style={{ fontSize: 20, textAlign: 'center' }} key={"name"}>{(this.props.product) ? this.props.product.Name : ""}</react_native_1.Text>
                        <react_native_1.Text style={{ fontSize: 16, textAlign: 'center' }} key={"price"}>${(this.props.product) ? this.props.product.Price : ""}</react_native_1.Text>
                        {this.showAddToCart()}
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_simple_modal_1.default>);
    }
}
exports.default = Detail;
//# sourceMappingURL=Detail.js.map