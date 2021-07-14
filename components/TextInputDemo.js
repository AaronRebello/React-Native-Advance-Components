
import React, { useState } from 'react';
import {
   Text,
   View,
   TextInput,
   TouchableOpacity,
   StyleSheet,
   Alert,
} from 'react-native';

const TextInputDemo = () => {
   const [inputValue, setInputValue] = useState('');

   const checkValueIsNumber = (text) => {
      let isNumber = false;

      for (let char of text) {
         if (!isNaN(char)) {
            isNumber = true;
         }
      }

      isNumber
         ? Alert.alert('Alert!!!!', 'Input value has number in it')
         : Alert.alert('Alert!!!!', 'Input value has no number in it');
   };

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.textInput}
            placeholder="Enter any words or letter"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            keyboardType='number-pad'
         />
         <TouchableOpacity
            style={styles.btn}
            onPress={() => checkValueIsNumber(inputValue)}>
            <Text style={styles.btnText}>Check Input has number or not</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
   },

   textInput: {
      borderWidth: 2,
      borderColor: '#673ab7',
      padding: 20,
      width: '100%',
      marginBottom: 10,
   },

   btn: {
      padding: 20,
      backgroundColor: '#673ab7',
      width: '100%',
   },

   btnText: {
      color: '#ffffff',
      fontWeight: '600',
      textAlign: 'center',
   },
});

export default TextInputDemo;
