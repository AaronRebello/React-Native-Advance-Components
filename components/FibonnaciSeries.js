
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const FibonnaciSeries = () => {

   const [inputValue, setInputValue] = useState('');
   const [fibonnaciNumbers, setFibonnaciNumbers] = useState('')

   const onEnterPress = () => {

      if(!isNaN(inputValue) && inputValue > 0) {

         const arr = [0, 1];
         
         let num1 = 0;
         let num2 = 1;
         let result = 0;
         while ((num1 + num2) < inputValue) {
            result = num1 + num2;
            arr.push(result);
            num1 = num2
            num2 = result
         }

         setFibonnaciNumbers(arr.join(' '));

      } else {
         Alert.alert('Alert!!', 'Enter Valid Number');
      }

   }


   return (  
      <View>
         <TextInput 
            style={styles.input}
            keyboardType="numeric"
            placeholder="EnterNumber"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            onEndEditing={onEnterPress}
         />
         <Button title="Enter" onPress={onEnterPress} />
         { fibonnaciNumbers ? <Text style={styles.fibonnaciText}>{fibonnaciNumbers}</Text> : null }
      </View>
   );
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      padding: 20
   },

   input: {
      padding: 20,
      borderWidth: 2,
      borderColor: '#ddd'
   },

   fibonnaciText: {
      padding: 20,
      fontSize: 20 
   }

});
 
export default FibonnaciSeries;