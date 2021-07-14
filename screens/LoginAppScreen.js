
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";

export default class LoginAppScreen extends Component {

    state = {
        username: "",
        password: "",
        loading: false
    }

    validateLoginApp = () => {
        if (this.state.username === "") {
            alert("Username is empty")
        }
        if (this.state.password === "") {
            alert("password is empty")

        } else {
            this.props.navigation.navigate('Home')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.loading}
                    textContent={'Loading...'}
                />
                <Text>Welcome to Login</Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder="Username" onChangeText={text => this.setState({ username: text })} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={text => this.setState({ password: text })}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => { this.validateLoginApp() }} ><Text>Login</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 200
    },
    inputView: {
        width: "85%",
        backgroundColor: "#D5D5D5",
        height: 50,
        margin: 20,
        justifyContent: "center",
        padding: 20,
        borderRadius: 10
    },
    inputText: {
        height: 50,
        color: "black"
    },
    loginBtn: {
        width: "60%",
        backgroundColor: "red",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
})