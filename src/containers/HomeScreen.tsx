import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../components/Button';
import Detail from '../components/Detail';
import List from '../components/List';
import Products from '../services/Products';
import Product from '../entities/Product';
import CartService from '../services/Cart';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

interface props {
    navigation: any,
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

export default class HomeScreen extends React.Component<props, state> {

    constructor(props) {
        super(props);
        this.state = {label: "", products: [], bgColor: "#DDDDDD", activeButtonElectronics: true, activeButtonFurniture: false,
            open: false, productDetail:null};
        this.filterProducts = this.filterProducts.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    protected addToCart = (i: Product) => {
        let cart = new CartService();
        cart.addToCart(i);
    }

    protected showDetails = (i:Product, openClose) =>{
        this.setState({open: openClose, productDetail: i});
    }

    private getProducts(filterBy: string): Array<Product> {
        let products = new Products();
        return products.getProducts().filter(product => product["Category"] === filterBy);
    }

    private filterProducts(filterBy:string) {
        let filtered = this.getProducts(filterBy);
        this.setState({
            products: filtered,
            activeButtonElectronics: (filterBy==="Electronics")?true:false,
            activeButtonFurniture: (filterBy==="Furniture")?true:false
        });
    }

    componentDidMount(){
        this.filterProducts('Electronics');
        this.setState({
            activeButtonElectronics: true,
            activeButtonFurniture: false
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>~ Retail Store ~</Text>
                <View style={styles.containerButtons}>
                    <Button
                        id="Electronics"
                        onPress={() =>  this.filterProducts('Electronics')}
                        label="Electronics"
                        bgColor={this.state.bgColor}
                        activeButton={this.state.activeButtonElectronics}
                    />
                    <Button
                        id="Furniture"
                        onPress={() =>  this.filterProducts('Furniture')}
                        label="Furniture"
                        bgColor={this.state.bgColor}
                        activeButton={this.state.activeButtonFurniture}
                    />
                </View>
                <View style={{backgroundColor: '#F5F5F5', borderRadius:6}}>
                    <List data={this.state.products} addToCart={this.addToCart} isCartList={false} showDetails={this.showDetails}/>
                </View>
                <Detail open={this.state.open} product={this.state.productDetail} showDetails={this.showDetails} addToCart={this.addToCart}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
