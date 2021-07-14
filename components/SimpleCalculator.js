
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from 'react-native';

const SimpleCalculator = () => {

   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [result, setResult] = useState(0);
   const [operator, setOperator] = useState('+');

   const onEnterPress = () => {

      if(!isNaN(num1) && !isNaN(num2)) {

         const number1 = Number(num1);
         const number2 = Number(num2);

         switch (operator) {
            case '+':
               setResult(number1 + number2)
               break;
            case '-':
               setResult(number1 - number2)
               break;
            case '*':
               setResult(number1 * number2)
               break;
            case '/':
               setResult(number1 / number2)
               break;
            default:
               break;
         }
      } else {
         Alert.alert('Alert!!', "Enter Valid Number");
      }

   }

   return (
      <View style={styles.container}>
         <View style={styles.outputContainer}>
            <Text style={styles.outputText}>{result}</Text>
         </View>
         <View style={styles.calcuContainer}>
            <TextInput 
               style={styles.input} 
               keyboardType="numeric"
               value={num1.toString()}
               onChangeText={(text) => setNum1(text)}  
            />
            <Text style={styles.calcOperatorText}>{operator}</Text>
            <TextInput 
               style={styles.input} 
               keyboardType="numeric"
               value={num2.toString()}
               onChangeText={(text) => setNum2(text)}
            />
            <View style={{ margin: 15 }}>
               <Button onPress={() => onEnterPress()} title="Enter" />
            </View>
         </View>
         <View style={styles.operatorsContainer}>
            <TouchableOpacity style={styles.operatorBtn} onPress={() => setOperator('+')}>
               <Text style={styles.operatorText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorBtn} onPress={() => setOperator('-')}>
               <Text style={styles.operatorText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorBtn} onPress={() => setOperator('*')}>
               <Text style={styles.operatorText}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorBtn} onPress={() => setOperator('/')}>
               <Text style={styles.operatorText}>/</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({

   container: {
      flex: 1
   },

   outputContainer: {
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
   },

   outputText: {
      fontSize: 42,
      textAlign: 'right'
   },

   calcuContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
      flexWrap: 'wrap'
   },

   input: {
      borderWidth: 2,
      borderColor: 'black',
      padding: 20,
      fontSize: 32
   },

   calcOperatorText: {
      margin: 20,
      fontSize: 20
   },

   operatorsContainer: {
      flexDirection: 'row',
      justifyContent: 'center'
   },

   operatorBtn: {
      paddingHorizontal: 25,
      paddingVertical: 15,
      backgroundColor: 'blue',
      margin: 5
   },

   operatorText: {
      color: '#fff',
      alignSelf: 'center',
      fontSize: 22,
   }

});

export default SimpleCalculator;