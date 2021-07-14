
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList, Alert } from 'react-native';

const PrintNumber = () => {

   const [inputValue, setInputValue] = useState('');
   const [numbers, setNumbers] = useState([]);

   const onInputSubmit = () => {

      if(!isNaN(inputValue) && inputValue > 0 && inputValue <= 100) {

         const arr = []
         for (let i = 1; i <= inputValue; i++) {
            arr.push({ id: i });
         }
         setNumbers(arr);

      } else {
         Alert.alert('Alert!!', 'Enter Valid Number Between 1 to 100')
      }
   }

   return (  
      <View style={styles.container}>
         <TextInput
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            placeholder="Enter Number"
            keyboardType="numeric"
            style={styles.input}
            onEndEditing={onInputSubmit} 
         />
         <Button title="Enter" onPress={onInputSubmit} />
         <FlatList
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               <View style={{ padding: 10, backgroundColor: '#ddd', flexGrow: 1, margin: 5 }}>
                  <Text style={{ alignSelf: 'center' }}>{item.id}</Text>
               </View>
            )}
            data={numbers}
            numColumns={4}
         />
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
   }

});
 
export default PrintNumber;