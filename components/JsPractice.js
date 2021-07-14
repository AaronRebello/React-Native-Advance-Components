import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ReplaceString from './ReplaceString'
import ConvertText from './ComponentProps/TextInputProps/ConvertText'

const JsPractice = () => {

    var date = new Date()

    return (
        <>
            <View>
                <Text>Get Date Method : </Text>
                <Text>Date:{date.getDate()}<Text style={{ fontSize: 10, lineHeight: 15 }}>th </Text></Text>
                <Text>Date:{date.getDate()} / {date.getMonth()} /{date.getFullYear()}</Text>
            </View>
            <View style={{ height: 30 }}></View>
            <Text>Replace String Method : </Text>
            <ReplaceString />

            <View style={{ height: 30 }}></View>
            <Text>Convert Text to Upper/Lower case Method : </Text>
            <ConvertText />

        </>
    )
}

export default JsPractice
