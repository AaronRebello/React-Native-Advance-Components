// React Native Show Progress bar While Loading WebView
// https://aboutreact.com/react-native-show-progress-bar-while-loading-webview/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

//import WebView
import {WebView} from 'react-native-webview';

const ActivityIndicatorElement = () => {
  return (
    <ActivityIndicator
      color="#009688"
      size="large"
      style={styles.activityIndicatorStyle}
    />
  );
};

const Webview1TimeLoader = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <WebView
          //Loading URL
          source={{uri: 'https://aboutreact.com'}}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          //View to show while loading the webpage
          renderLoading={ActivityIndicatorElement}
          //Want to show the view or not
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Webview1TimeLoader;