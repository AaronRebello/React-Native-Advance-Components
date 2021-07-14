
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Animated, { 
   useSharedValue, 
   useAnimatedStyle, 
   withTiming,
   withRepeat
} from 'react-native-reanimated';

const styles = StyleSheet.create({

   container: {

   },

   box: {
      width: 80,
      height: 80,
      backgroundColor: '#6853a7',
      borderRadius: 10,
      marginBottom: 20,
      alignSelf: 'center'
   }

});

const RepeatBox = () => {

   const rotation = useSharedValue(0);

   const animatedStyle = useAnimatedStyle(() => {
      return {
         transform: [{ rotateZ: `${rotation.value}deg` }],
      };
   });

   return (
      <View style={styles.container}>
         <Animated.View style={[styles.box, animatedStyle]} />
         <Button
            title="start"
            onPress={() => {
               rotation.value = withRepeat(withTiming(20), 6, true)
            }}
         />
      </View>
   );
}

export default RepeatBox;