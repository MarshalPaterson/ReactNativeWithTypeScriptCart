import 'react-native';
import * as React from 'react';
import Detail from '../../components/Detail';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Detail open={false} product={null}/>
    );
});
