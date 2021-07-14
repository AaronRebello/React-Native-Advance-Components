import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageZoomProps = () => {
    const images = [
        {
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'
        },
        {
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'
        }
    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ImageViewer
                    imageUrls={images}
                    renderIndicator={() => null}
                />
            </View>
        </SafeAreaView>
    )
}

export default ImageZoomProps

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
    },
});

