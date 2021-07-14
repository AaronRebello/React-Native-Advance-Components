
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withTiming } from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';

const styles = StyleSheet.create({

   cricle: {
      width: 80,
      height: 80,
      backgroundColor: '#6853a7',
      borderRadius: 50,
      marginBottom: 20,
      alignSelf: 'center',
      marginTop: 80
   }

});

const GestureBox = () => {

   const pressed = useSharedValue(false);

   const eventHandler = useAnimatedGestureHandler({
      onStart: (event, ctx) => {
        pressed.value = true;
      },
      onEnd: (event, ctx) => {
        pressed.value = false;
      },
    });

   const animatedStyles = useAnimatedStyle(() => {
      return {
         transform: [{ scale: withTiming(pressed.value ? 2 : 1) }]
      }
   })

   return (  
      <View>
         <TapGestureHandler onGestureEvent={eventHandler}>
            <Animated.View style={[styles.cricle, animatedStyles]} />
         </TapGestureHandler> 
      </View>
   );
}
 
export default GestureBox;