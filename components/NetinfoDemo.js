import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default class NetinfoDemo extends React.Component {
  componentDidMount() {
    NetInfo.addEventListener((state) => {
      this.handleConnectivityChange(state.isConnected);
    });
  }

  handleConnectivityChange = (isConnected) => {
    if (isConnected === true) {
      alert('Internet is connected');
    } else {
      alert('Internet is Not connected');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <SafeAreaView>
            <Text style={styles.helptext}> Turn off the internet</Text>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  helptext: {
    color: '#0AA1FF',
    fontSize: 18,
    textAlign: 'right',
  },
});
