
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BasicBox from './BasicBox';
import RepeatBox from './RepeatBox';
import GestureBox from './GestureBox';

const styles = StyleSheet.create({

   container: {
      flex: 1,
      padding: 20
   },

});

const ReanimatedDemo = () => {
   return (  
      <View style={styles.container}>
         <BasicBox />
         <RepeatBox />
         <GestureBox />
      </View>
   );
}
 
export default ReanimatedDemo;