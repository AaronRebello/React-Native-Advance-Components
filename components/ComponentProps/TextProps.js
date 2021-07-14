import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const TextProps = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.strikeThroughtextStyle}>Example of strike Through text Style</Text>
                <Text style={styles.underlineTextStyle}>underline Text Style</Text>
                <View>
                    <Text style={{ color: '#fff', marginTop: 20 }}>this is how we can {'\n'} break the line</Text>
                    <Text style={{ color: '#fff', marginTop: 20 }}>{`this is how we can
  break the line`}</Text>

                </View>
            </View>

            <Text>Superscript :</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                margin: 20,
                color: "#fff"
            }}
            >
                <Text style={{ fontSize: 20, lineHeight: 30 }} >i will reach airport at 10</Text>
                <Text style={{ fontSize: 15, lineHeight: 22 }}>am </Text>
                <Text style={{ fontSize: 20, lineHeight: 30 }}>for my flight</Text>
            </View>

            <Text>Subscript :</Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                margin: 10,
                color: "#fff"
            }}
            >
                <Text style={{ fontSize: 20, lineHeight: 30 }} >i will reach airport at 10</Text>
                <Text style={{ fontSize: 15, lineHeight: 37 }}>am </Text>
                <Text style={{ fontSize: 20, lineHeight: 30 }}>for my flight</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        margin: 10,
        height: 200,
        backgroundColor: "dodgerblue"
    },
    strikeThroughtextStyle: {
        textDecorationLine: 'line-through',
        color: "#fff"
        //line-through is the trick
    },

    underlineTextStyle: {
        textDecorationLine: 'underline',
        color: "#fff",
        marginTop: 20
        //line-through is the trick
    },
})
export default TextProps
