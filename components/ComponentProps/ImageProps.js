import React from 'react'
import { Image, Text, View, StyleSheet, SafeAreaView } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'


const ImageProps = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text>Original Image</Text>
                <Image
                    source={require('../Public/images/colorful-christmas-trees-inspiration-5.jpg')}
                    style={{
                        height: 100, width: 100, resizeMode: 'center',
                    }}
                />

                <Text>With Alpha Opacity Image</Text>
                <Image
                    source={require('../Public/images/colorful-christmas-trees-inspiration-5.jpg')}
                    style={{ height: 100, width: 100, opacity: 0.2, resizeMode: "center" }}
                />
            </View>
            <Text>border Radius</Text>

            <Image
                source={require('../Public/images/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg')}
                style={{ height: 200, width: 200, margin: 20, borderRadius: 20 }}
            />
            <Text>circle image</Text>

            <Image
                source={require('../Public/images/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg')}
                style={{ height: 200, width: 200, margin: 20, borderRadius: 100 }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
    },
})

export default ImageProps
