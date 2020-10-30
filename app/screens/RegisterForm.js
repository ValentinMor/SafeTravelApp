import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

export default class LoginForm extends Component {
    state = {user: '', password: ''}
    
    render() {
        return (
        <View style={styles.container}>
            <TextInput
            placeholder = "Rut"
            returnKeyType = 'next'
            secureTextEntry
            style = {styles.input}
            
            />
            <TextInput
            placeholder = "Nombre"
            returnKeyType = 'next'
            secureTextEntry
            style = {styles.input}
            
            />
            
            <TextInput
            placeholder = "Usuario"
            returnKeyType = "next"
            autoCapitalize = "none"
            autoCorrect = {false}
            style = {styles.input}
            />

            <TextInput
            placeholder = "Correo electrónico"
            returnKeyType = "next"
            keyboardType = "email-address"
            autoCapitalize = "none"
            autoCorrect = {false}
            style = {styles.input}
            />

            <TextInput
            placeholder = "Número de teléfono"
            returnKeyType = 'next'
            secureTextEntry
            style = {styles.input}
            />

            <TextInput
            placeholder = "Contraseña"
            returnKeyType = 'next'
            secureTextEntry
            style = {styles.input}
            />

            <TextInput
            placeholder = "Repetir Contraseña"
            returnKeyType = 'go'
            secureTextEntry
            style = {styles.input}
            />

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
        padding: 20,
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
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

