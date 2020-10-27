import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

export default class LoginForm extends Component {
    state = {user: '', password: ''}
    
    render() {
        return (
        <View style={styles.container}>
            <TextInput
            placeholder = "Usuario o email"
            returnKeyType = "next"
            onSubmitEditing = {() => this.passwordInput.focus()}
            keyboardType = "email-address"
            autoCapitalize = "none"
            autoCorrect = {false}
            style = {styles.input}
            />
            <TextInput
            placeholder = "Contraseña"
            returnKeyType = 'go'
            secureTextEntry
            style = {styles.input}
            ref = {(input) => this.passwordInput = input}
            />

            <TouchableOpacity
            style={styles.buttonContainer}
            onPress = {() => alert("Login")}
            >
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <Text/>
            <TouchableOpacity
            style={styles.buttonContainer}
            onPress = {() => alert("Register")}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: colors.secondary,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: "center",
        color: '#FFFFFF',
        fontWeight: '700'
    }
});

