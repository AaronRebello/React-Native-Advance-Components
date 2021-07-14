import { toNumber } from 'lodash'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'

class CalculatorDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Num1: 0,
            Num2: 0
        }

    }

    Sum = () => {
        var N1 = toNumber(this.state.Num1)
        var N2 = toNumber(this.state.Num2)

        var sumResult = N1 + N2
        alert(sumResult)
    }
    minus = () => {
        var N3 = toNumber(this.state.Num1)
        var N4 = toNumber(this.state.Num2)

        var minusResult = N3 - N4
        alert(minusResult)

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder="num1" onChangeText={Num1 => this.setState({ Num1 })} />
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder="num2" onChangeText={Num2 => this.setState({ Num2 })} />
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.loginBtn} onPress={this.Sum}><Text>add</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn} onPress={this.minus} ><Text>minus</Text></TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
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
    btnView: {
        flexDirection: "row",
    },
    loginBtn: {
        width: "20%",
        backgroundColor: "yellow",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
})
export default CalculatorDemo