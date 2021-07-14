import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const ConvertText = () => {

    const [defaultText, setDefaultText] = useState('About React')

    const convertToUpperText = () => {
        let upperCaseText = defaultText.toUpperCase();
        setDefaultText(upperCaseText);
    }


    const convertToLowerText = () => {
        let loweCaseText = defaultText.toLowerCase();
        setDefaultText(loweCaseText);
    }
    const convertTextToTitleCase = () => {
        let camelCaseText = defaultText
            .split(' ')
            .map(function (word, index) {
                // First character upper case else lower case
                return word.charAt(0)
                    .toUpperCase() + word.slice(1)
                        .toLowerCase();
            })
            .join(' ');
        setDefaultText(camelCaseText);
    };

    return (
        <View style={{ flex: 1 }}>
            <Text>{defaultText}</Text>

            <Button
                title="to upper case"
                onPress={convertToUpperText}
                color="#606070"
            />
            <View style={{ marginTop: 10 }} />

            <Button
                title="to lower case"
                onPress={convertToLowerText}
                color="#606070"
            />
            <View style={{ marginTop: 10 }} />

            <Button
                title="Convert Text To Title Case"
                onPress={convertTextToTitleCase}
                color="#606070"
            />
        </View>
    )
}

export default ConvertText
