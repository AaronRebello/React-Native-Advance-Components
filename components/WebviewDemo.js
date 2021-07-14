import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import WebView from 'react-native-webview'

let jsCode = `
    document.querySelector('#myContent').style.backgroundColor = 'blue';
`;

export default class WebviewDemo extends Component {
  render() {
    return (
      <View style={localStyles.viroContainer}>

        <WebView
          source={{ uri : 'https://www.youtube.com/watch?v=tzANoSaEvf8' }}
          style={{ flex: 1 }}
          ref={webview => {this.myWebview = webview;}} 
          injectedJavaScript={jsCode}
          javaScriptEnabled={true}
        />

        <TouchableHighlight
          style={localStyles.overlayButton}
          onPress={this.sendMessageToWebView2}
          underlayColor="transparent">
          <Text>Send message to WebView</Text>
        </TouchableHighlight>

      </View>
    );
  }

  sendMessageToWebView2 = () => {
    this.myWebview.injectJavaScript(`
            (function () {
             document.querySelector('body').style.backgroundColor = 'orange';
            })();
        `);
  };
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
  },
  overlayButton: {
    position: 'absolute',
    bottom: 0,
    left: 110,
    height: 50,
    width: 150,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f0a0aa',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
});