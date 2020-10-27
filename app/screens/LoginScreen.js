import React from 'react';
import { render } from 'react-dom';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView from './MapView';
import colors from '../config/colors';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'

function LoginScreen(props) {
    
    return (
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}
                source={require('../assets/icon.png')} 
                />
            </View>
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'flex-end'
    },
    logo: {
        width:100,
        height: 100,
        alignSelf: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 190,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
})

export default LoginScreen;