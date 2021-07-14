import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList, Alert } from 'react-native';

const NumberPrintingDemo = () => {
    const [inputValue, setInputValue] = useState('');
    const [numbers, setNumbers] = useState([]);
    const onInputSubmit = () => {
        if (!isNaN(inputValue) && inputValue > 0 && inputValue <= 100) {
            const arr = []
            for (let i = 1; i <= inputValue; i++) {
                arr.push({ val: i });
            }
            setNumbers(arr);
        } else {
            Alert.alert('Alert!!', 'Enter Valid Number Between 1 to 100')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                placeholder="Enter Number"
                keyboardType="numeric"
            />
            <Button title="Enter" onPress={onInputSubmit} />
            <FlatList
                keyExtractor={(item) => item.val}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, backgroundColor: '#ddd', flexGrow: 1, margin: 5 }}>
                        <Text style={{ alignSelf: 'center' }}>{item.val}</Text>
                    </View>
                )}
                data={numbers}
                numColumns={5}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

});

export default NumberPrintingDemo;