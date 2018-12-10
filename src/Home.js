import React, { Component } from 'react';
import { View, Text, Dimensions} from 'react-native';
import { Card } from 'native-base';
import Device from 'react-native-device-detection'
export default class Home extends Component {

    render() {
        if (Device.isTablet) {
            return (
                <Card style={styles.tablet.containerStyle}>
                    <Text>Hello to react-native-starter-kit for Android</Text>
                </Card>
            );
        }
        else {
            return (
                <View style={styles.containerStyle}>
                    <Text>Hello to react-native-starter-kit for Android</Text>
                </View>
            );
        }
    }
}

const styles = {
    //------------------------------------PHONE----------------------------------------//
    containerStyle: {
        height: '100%'
    },
    //------------------------------------TABLET----------------------------------------//
    tablet: {
        containerStyle: {
            height: Dimensions.get('window').height * 0.8,
            width: Dimensions.get('window').width * 0.8,
            backgroundColor: 'white',
            borderRadius: 30,
            marginTop: Dimensions.get('window').height * 0.05,
            alignSelf: 'center',
        }
    }
}