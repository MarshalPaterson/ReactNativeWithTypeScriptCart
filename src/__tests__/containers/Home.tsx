import 'react-native';
import * as React from 'react';
import Home from '../../containers/HomeScreen';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Home navigation={[]}/>
    );
});
