import React, { useState } from 'react'
import { Button, SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native'

const TextInputProps = () => {

    const [inputValue, setinputValue] = useState('')

    const valueIsNumberOrNot = () => {
        if (isNaN(inputValue)) {
            alert("It is Not a number")
        } else {
            alert('Yes it is a number')
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>TextInput Props {'\n'}</Text>
                <TextInput
                    placeholder="Enter Text"
                    onChangeText={(inputValue) => { setinputValue(inputValue) }}
                    style={styles.textInputStyle}
                />

                <Button
                    onPress={valueIsNumberOrNot}
                    title="to check if it is a number or not"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textInputStyle: {
        textAlign: 'center',
        height: 50,
        width: '70%',
        marginBottom: 10,
        backgroundColor: "white"
    },
});

export default TextInputProps
