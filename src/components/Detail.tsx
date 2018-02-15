import * as React from 'react';
import Modal from 'react-native-simple-modal';
import {Text, TouchableOpacity, View} from 'react-native';
import Product from "../entities/Product";
import ImageUtil from '../utils/ImageSource';
import Button from './Button';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

interface props {
    open: boolean,
    product: Product,

    showDetails?(i: Product, openClose: boolean): void;

    addToCart?(i: Product): void,
}

interface state {
}


export default class Detail extends React.Component<props, state> {

    constructor(props) {
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    private addToCart = (i: Product) => {
        this.props.addToCart(i);
    }

    private showDetails = (i: Product, openClose) => {
        this.setState({open: openClose, productDetail: i});
        this.props.showDetails(i, openClose);
    }

    private showAddToCart() {
        if (this.props.addToCart)
            return <Button width={undefined} label={"Add to Cart"} bgColor={"#DDDDDD"}
                           onPress={() => this.addToCart((this.props.product) ? this.props.product : undefined)}
                           id={"AddToCart"} activeButton={false}/>
    }

    render() {
        return (
            <Modal
                offset={0}
                open={this.props.open}
                overlayBackground={'#FFFFFF'}
                animationDuration={200}
                animationTension={40}
                modalDidOpen={() => undefined}
                modalDidClose={() => undefined}
                closeOnTouchOutside={false}
                containerStyle={{
                    justifyContent: 'center'
                }}
                modalStyle={{
                    borderRadius: 12,
                    margin: 20,
                    padding: 10,
                    backgroundColor: '#F5F5F5'
                }}
                disableOnBackPress={false}
            >
                <View style={{height: 370}}>
                    <TouchableOpacity
                        style={{margin: 5, top: 0, right: 0, alignSelf: 'flex-end'}}
                        onPress={() => this.showDetails(null, false)}>
                        <Text style={{fontSize: 16}}> X </Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 24, marginBottom: 10, fontWeight: "bold", position: 'absolute',
                        left: 0,
                        top: 0,
                    }}>Detail</Text>
                    <View>
                        <View key={"image"}
                              style={{
                                  height: 170,
                                  padding: 8,
                                  borderWidth: 1,
                                  backgroundColor: 'white',
                                  borderRadius: 2
                              }}>{ImageUtil.getImagePath((this.props.product) ? this.props.product.Name : "")}</View>
                        <Text key={"decs"}>Lorem ipsum dolor sit amet, ut eos tantas integre persequeris, quo etiam
                            docendi in, ea recteque pertinacia duo. Ad cum magna adhuc, has scaevola vivendum te, ius ei
                            laboramus abhorreant.</Text>
                        <Text style={{fontSize: 20, textAlign: 'center'}}
                              key={"name"}>{(this.props.product) ? this.props.product.Name : ""}</Text>
                        <Text style={{fontSize: 16, textAlign: 'center'}}
                              key={"price"}>${(this.props.product) ? this.props.product.Price : ""}</Text>
                        {this.showAddToCart()}
                    </View>
                </View>
            </Modal>
        );
    }
}
