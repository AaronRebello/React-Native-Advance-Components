import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class StateDemo extends Component {
    state = {
        names: [
            {
                id: 1,
                name: 'india'
            },
            {
                id: 2,
                name: 'australia'
            },
            {
                id: 3,
                name: 'iceland'
            },
            {
                id: 4,
                name: 'aaron'
            },
            {
                id: 5,
                name: 'sweden'
            },
            {
                id: 6,
                name: 'swizerland'
            },
            {
                id: 7,
                name: 'usa'
            },
            {
                id: 8,
                name: 'canada'
            },
            {
                id: 9,
                name: 'uk'
            },
        ]

    }
    render() {
        return (
            <ScrollView>
                {this.state.names.map((item, index) => (
                    <View key={item.id} style={styles.item}>
                        <Text style={{
                            color: "red"
                        }}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 4,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1',
    }
})
export default StateDemo;
