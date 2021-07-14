

import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, Button, Easing } from 'react-native';

const BouncingBallAnimation = () => {

   const cricleTranslate = useRef(new Animated.Value(-500)).current;
   const cricleOpacity = useRef(new Animated.Value(1)).current;
   const cricleScale = useRef(new Animated.Value(1)).current;

   useEffect(() => {
      startAnimation();
   }, []);

   const startAnimation = () => {
      Animated.timing(cricleTranslate, {
         toValue: 0,
         duration: 2000,
         useNativeDriver: true,
         easing: Easing.bounce
      }).start(({ finished }) => {
         if (finished) {
            const animateOpacityAndScale = () => {
               Animated.timing(cricleOpacity, {
                  toValue: 0,
                  duration: 1000,
                  useNativeDriver: true,
                  easing: Easing.ease
               }).start();

               Animated.timing(cricleScale, {
                  toValue: 10,
                  duration: 1000,
                  useNativeDriver: true,
                  easing: Easing.ease
               }).start(({ finished }) => {
                  if(finished) {
                     cricleTranslate.setValue(-500);
                     cricleOpacity.setValue(1);
                     cricleScale.setValue(1);
                     startAnimation();
                  }
               });
            }
            Animated.parallel([animateOpacityAndScale()])

         }
      });
   }

   return (
      <View style={styles.container}>
         <SafeAreaView>
            <Animated.View
               style={[styles.cricleStyle, {
                  transform: [{ translateY: cricleTranslate }, { scale: cricleScale }],
                  opacity: cricleOpacity 
               }]}
            >
            </Animated.View>
         </SafeAreaView>
      </View>
   );
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      overflow: 'hidden'
   },

   cricleStyle: {
      padding: 30,
      backgroundColor: '#e09e48',
      borderRadius: 50,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      alignSelf: 'center',
      // transform: [{ translateY: -500  }]
   }

});

export default BouncingBallAnimation;
