// React Native Blinking Animation
// https://aboutreact.com/react-native-blinking-animation/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const BlinkingTextAnimation = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => { 
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>React Native Blinking Animation</Text>
        <Text
          style={[styles.textStyle, 
          { display: showText ? 'none' : 'flex' }]}>
          Lorem Ipsum is simply dummy text of the printing..
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default BlinkingTextAnimation;
