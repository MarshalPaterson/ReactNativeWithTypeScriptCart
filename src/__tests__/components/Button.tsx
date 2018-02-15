import 'react-native';
import * as React from 'react';
import Button from '../../components/Button';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Button label={"Test"} bgColor={"grey"} id={"test"} activeButton={true}/>
    );
});
