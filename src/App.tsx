import * as React from 'react';
import {TabNavigator} from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import CartScreen from './containers/CartScreen';

console.disableYellowBox = true;

export const App = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Products"
        }
    },
    Cart: {
        screen: CartScreen,
        navigationOptions: {
            tabBarLabel: "Cart"
        }
    }

}, {
    tabBarOptions: {
        activeTintColor: '#222',
    }
});