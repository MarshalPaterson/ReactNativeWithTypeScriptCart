import * as React from 'react';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Button from './Button';
import Product from '../entities/Product';
import ImageUtil from '../utils/ImageSource';
import CartService from "../services/Cart";

interface props {
    data: any,
    isCartList: boolean,

    addToCart?(i: Product): void,

    showDetails?(i: Product, openClose: boolean): void
}

interface state {
}

class List extends React.Component<props, state> {

    constructor(props) {
        super(props);
        this.state = {data: this.props.data};
        this.addToCart = this.addToCart.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    private addToCart = (i: Product) => {
        this.props.addToCart(i);
    }

    private showDetails = (i: Product, openClose) => {
        this.props.showDetails(i, openClose);
    }

    private showAddToCart = (isCart, item) => {
        if (isCart === false) {
            return <View key={"viewAddbtn"}>
                <Button key={"addbtn"} width={80} label={"Add to Cart"} bgColor={"#eee"}
                        onPress={() => this.addToCart(item)}
                        id={"AddToCart"} activeButton={false}/>
            </View>;
        }
    }

    private deleteFromCart = (isCart, item) => {
        if (isCart === true) {
            return <View key={"viewAddbtn"}>
                <View><Text style={{color: 'red'}}
                            onPress={() => this.onDeleteFromCart(item)}>DEL</Text><TextInput/></View>
            </View>;
        }
    }

    private onDeleteFromCart = (i: Product) => {
        let cart = new CartService();
        cart.deleteFromCart(i);
    }

    renderFlatListItem(item) {
        return <View style={{
            flex: 1,
            flexDirection: 'row',
            borderRadius: 4,
            borderColor: 'white',
            borderWidth: 1
        }} key={"parentView"}>
            {this.deleteFromCart(this.props.isCartList, item)}
            <TouchableOpacity key={"detailBtn"} onPress={() => this.showDetails(item, true)}
                              style={{flexDirection: 'row', flex: 1, padding: 8}}>
                <View key={"image"}
                      style={{height: 80, width: 80, borderWidth: 1, backgroundColor: 'white', borderRadius: 2}}>
                    {this.getImagePath(item.Name)}
                </View>
                <View key={"viewPrice"} style={{padding: 8}}>
                    <Text key={"name"}>{item.Name}</Text>
                    <Text key={"price"}>${item.Price}</Text>
                </View>
            </TouchableOpacity>
            {this.showAddToCart(this.props.isCartList, item)}
        </View>
    }

    private getImagePath(i): Object {
        return ImageUtil.getImagePath(i);
    }

    render() {
        return (
            <View>
                <FlatList
                    key={"flatlistexample"}
                    data={this.props.data}
                    renderItem={({item}) => this.renderFlatListItem(item)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

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

export default List;