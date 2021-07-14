import React from 'react'
import { Text, View, Button } from 'react-native'

const FactorialDemo = () => {


    const fac = () => {

        let n = 5
        let nf = 1
        for (let i = n; i >= 1; i--) {
            if (n > 0) {
                nf = nf * i
            }
        }
        alert(nf)

    }

    return (
        <View>
            <Text>Factorial Demo</Text>
            <Button title="click me" onPress={fac} />
        </View>

    )
}

export default FactorialDemo
