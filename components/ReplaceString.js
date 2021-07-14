import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class ReplaceString extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'aaronrebello@ggcollege.in'
        }
    }

    getName = () => {
        return this.state.value.replace('aaron', '#')
    }
    splitByGg = () => {
        return this.state.value.split('gg')
    }
    
    render() {
        return (
            <View>
                <Text>Old Text</Text>
                <Text>{this.state.value}</Text>
                <Text>Replaced Text</Text>
                <Text>{this.getName()}</Text>

                <View style={{ height: 30 }}></View>
                <Text>Splited Text</Text>
                <Text>{this.splitByGg()}</Text>


            </View>
        )
    }
}
