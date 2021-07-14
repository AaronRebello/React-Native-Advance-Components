// Example of Localization in React Native Multi Language App
// https://aboutreact.com/localization-in-react-native/

import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import StringsOfLanguage from './StringsOfLanguage';

const ContentScreen = ({route, navigation}) => {
  useEffect(() => {
    let heading = '';
    if (route.params.selectedLanguage == 'hi') {
      heading = 'Selected Language Hindi';
    } else if (route.params.selectedLanguage == 'ma') {
      heading = 'Selected Language Marathi';
    } else if (route.params.selectedLanguage == 'en') {
      heading = 'Selected Language English';
    } else if (route.params.selectedLanguage == 'fr') {
      heading = 'Selected Language French';
    }
    navigation.setOptions({title: heading});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {StringsOfLanguage.first}
        </Text>
        <Text style={styles.text}>
          {StringsOfLanguage.second}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          color: 'grey',
        }}>
        Example of Localization in React Native (Multi Language App)
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#191919',
    fontSize: 25,
    marginTop: 15,
  },
});

export default ContentScreen;