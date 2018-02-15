import * as React from 'react'
import {StyleSheet, View} from 'react-native';
import NativeButton from 'react-native-button';


interface props {
    id: string,
    label: string,
    onPress?: any,
    bgColor: string,
    activeButton: boolean,
    width?: number
}

interface state {
}

export default class Button extends React.Component<props, state> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NativeButton
                    {...this.props}
                    style={{
                        alignItems: 'center',
                        backgroundColor: (this.props.activeButton) ? "#94e794" : this.props.bgColor,
                        padding: 10,
                        width: this.props.width
                    }}
                    id={this.props.id}
                    isActive={this.props.activeButton}
                >{this.props.label}</NativeButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})
