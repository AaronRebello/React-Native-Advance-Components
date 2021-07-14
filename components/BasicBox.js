
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

const styles = StyleSheet.create({

   container: {
      marginBottom: 20
   },

   box: {
      width: 80,
      height: 80,
      backgroundColor: '#6853a7',
      borderRadius: 10,
      marginBottom: 0
   }

});


function BasicBox() {
   const offset = useSharedValue(0);

   const animatedStyles = useAnimatedStyle(() => {
      return {
         transform: [{ translateX: withTiming(offset.value * 255) }],
      };
   });

   return (
      <View style={styles.container}>
         <Animated.View style={[styles.box, animatedStyles]} />
         <Button onPress={() => offset.value = Math.random()} title="Move" />
      </View>
   );
}

export default BasicBox;