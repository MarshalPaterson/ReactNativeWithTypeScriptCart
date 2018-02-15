import 'react-native';
import * as React from 'react';
import Cart from '../../containers/CartScreen';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Cart/>
    );
});
