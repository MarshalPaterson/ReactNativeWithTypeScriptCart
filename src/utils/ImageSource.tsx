import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

export default abstract class ImageSource {

    // Error: require() must have a single string literal arguments
    // https://github.com/facebook/react-native/issues/7015
    public static getImagePath(i): Object {
        switch (i) {
            case 'Microwave oven':
                return <Image key={"image"} style={styles.imageContainer}
                              source={require('../assets/Microwave.jpg')}
                />;
            case 'Television':
                return <Image key={"image"} style={styles.imageContainer}
                              source={require('../assets/TV.jpg')}
                />;
            case 'Vacuum Cleaner':
                return <Image key={"image"} style={styles.imageContainer}
                              source={require('../assets/VacuumCleaner.jpg')}
                />;
            case 'Table':
                return <Image key={"image"} style={styles.imageContainer}
                              source={require('../assets/Table.jpg')}
                />;
            case 'Chair':
                return <Image key={"image"} style={styles.imageContainer}
                              source={require('../assets/Chair.jpg')}
                />;
            case 'Almirah':
                return <Image key={"image"} style={styles.imageContainer}
                              source={require('../assets/Almirah.jpg')}
                />;
            default:
                return <Image
                    source={require('../assets/TV.jpg')}
                />;
        }
    }
}

const styles = StyleSheet.create({

    MainContainer: {
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