import React from 'react'
import { View, SafeAreaView, StyleSheet,Text } from 'react-native'

const ViewProps = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}
                onStartShouldSetResponder={
                    () => alert("View Clicked")
                }
            >
                <Text style={styles.paragraph}>Example on click of view</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 150,
        width: 200,
        alignItems: "center",
        alignContent: "center"
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})


export default ViewProps
