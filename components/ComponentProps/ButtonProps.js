import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Button, Image } from 'react-native'

const ButtonProps = () => {

    const onLongPressHandler = () => {
        alert("Long press clicked")
    }

    const onPressHandler = () => {
        alert("Long press clicked")
    }

    return (
        <View>

            <View style={styles.container}>
                <TouchableOpacity
                    onLongPress={onLongPressHandler}
                >
                    <Text style={styles.buttonTextStyle}> LONG PRESS THE BUTTON</Text>
                </TouchableOpacity>
                <Button onLongPress={onPressHandler} title="Long" />
            </View>

            <View style={styles.container1}>
                <TouchableOpacity style={styles.buttonFacebookStyle} activeOpacity={0.5}>
                    <Image source={require('../Public/images/google4_hdpi.png')} style={{
                        width: 30
                    }} />
                    <View style={styles.buttonFacebookStyle} />

                    <Text> Login to facebook</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        alignContent: "center",
        alignItems: "center",
        flex: 1,
        margin: 10,
        height: 200,
        backgroundColor: "dodgerblue"
    },
    container1: {
        alignContent: "center",
        alignItems: "center",
        flex: 1,
        margin: 10,
        height: 200,
        backgroundColor: "lightblue"
    },
    buttonTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: "lightgreen",
        marginTop: 50,
        padding: 10
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    // buttonImageIconStyle: {
    //     padding: 10,
    //     margin: 5,
    //     height: 25,
    //     width: 25,
    //     resizeMode: 'stretch',
    //   },
})

export default ButtonProps
