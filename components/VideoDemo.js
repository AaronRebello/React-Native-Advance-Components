
import React, { useState, useRef } from 'react';
import Video from 'react-native-video';

import { View, StyleSheet,Text } from 'react-native'
const VideoDemo = () => {
    // const videoPlayer = useRef(null);

    // const [paused, setPaused] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isFullScreen, setIsFullScreen] = useState(false);
    // const [screenType, setScreenType] = useState('content');
    // const [duration, setDuration] = useState(0);


    // const onLoad = (data) => {
    //     setDuration(data.duration);
    //     setIsLoading(false);
    // };

    // const onProgress = (data) => {
    //     // Video Player will progress continue even if it ends
    //     if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
    //       setCurrentTime(data.currentTime);
    //     }
    //   };
      
    // const onLoadStart = (data) => setIsLoading(true);

    // const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

    // const exitFullScreen = () => {
    //     alert('Exit full screen');
    // };

    // const enterFullScreen = () => { };

    return (
        <View style={styles.container}>
            <Video controls
                source={require('../Public/videos/jBCalifornia.mp4')}
                style={styles.mediaPlayer}
                // onFullScreen={isFullScreen}
                volume={10}
            />
        </View>
    )
}

export default VideoDemo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:300,
        margin:50,
        backgroundColor:"purple",
        
    },
    mediaPlayer: {
        width:200,
        position: 'absolute',
        top: 50,
        left: 25,
        bottom: 40,
        right: 0,
      },
})