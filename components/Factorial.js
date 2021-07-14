
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const Factorial = () => {

   const [inputValue, setInputValue] = useState('');
   const [result, setResult] = useState('');
   const [factorialNumber, setFactorialNumber] = useState(0); 

   const onEnterPress = () => {

      setFactorialNumber(inputValue)

      if(!isNaN(inputValue) && inputValue > 0) {

         let num = inputValue;
         for (let i = inputValue - 1; i >= 1; i--) {
            num = num * i
         }
         setResult(num);

      } else {
         Alert.alert('Alert!!', 'Enter Valid Number');
      }

   }

   return (  
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            placeholder="Enter Number"
            keyboardType="numeric"
            onEndEditing={onEnterPress}
         />
         <Button
            title="Enter"
            onPress={onEnterPress}
         />
         { result ? <Text style={styles.resultText}>{`Factorial of ${factorialNumber} is ${result}`}</Text> : null }
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

   resultText: {
      padding: 20,
      fontSize: 20,
      alignSelf: 'center'
   }

});
 
export default Factorial;