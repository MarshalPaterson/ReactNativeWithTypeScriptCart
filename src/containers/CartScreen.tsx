/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CartService from "../services/Cart";
import List from '../components/List';
import Product from "../entities/Product";
import Detail from '../components/Detail';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

interface props {
}

interface state {
    label: string,
    products: Array<Product>,
    bgColor: string,
    activeButtonElectronics: boolean,
    activeButtonFurniture: boolean,
    open: boolean,
    productDetail: Product
}

export default class CartScreen extends React.Component<props, state> {

    constructor(props) {
        super(props);
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

    public async getCartItems(): Promise<Object> {
        let cart = new CartService();
        return cart.getAllItems();
    }

    private checkValidJSON(text) {
        try {
            if (text !== "") {
                if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (e) {
            return false;
        }
    }

    private sumOfProducts(): string {
        let s = this.state.products;
        let t = 0.00;
        for (let i = 0; i < s.length; i++) {
            t = t + Number(s[i].Price);
        }
        return Number(t).toFixed(2);
    }

    protected showDetails = (i: Product, openClose) => {
        this.setState({open: openClose, productDetail: i});
    }

    async componentDidUpdate() {
        await this.fitlerProducts();
    }

    async componentDidMount() {
        await this.fitlerProducts();
    }

    private async fitlerProducts() {
        let data = [];
        let c = await this.getCartItems();
        for (let i = 0; i < c[0].length; i++) {
            if (this.checkValidJSON((c[0][i].value).toString())) {
                data.push(JSON.parse(c[0][i].value));
            }
        }
        let a: Array<Product> = data;
        this.setState({
            products: a
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleSubText}>Cart Items</Text>
                <View style={{backgroundColor: '#F5F5F5', borderRadius: 6, height: height - 90}}>
                    <List data={this.state.products} isCartList={true} showDetails={this.showDetails}/>
                </View>
                <View style={{
                    backgroundColor: '#F5F5F5', borderRadius: 6, position: 'absolute',
                    height: 40,
                    left: -10,
                    top: height - 120,
                    paddingTop: 8,
                    width: width
                }}>
                    <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>TOTAL:
                        ${this.sumOfProducts()}</Text>
                </View>
                <Detail open={this.state.open} product={this.state.productDetail} showDetails={this.showDetails}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

