
import React, { useState, useEffect, } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ScrollView, } from 'react-native';

const JsBasicTask = () => {
   const [emailInput, setEmailInput] = useState('');
   const [phoneInput, setPhoneInput] = useState('');
   const [currentDate, setCurrentDate] = useState('');
   const [currentTime, setCurrentTime] = useState('');
   const [pyramidOfStar, setPyramidOfStar] = useState('');
   const [fahrenheit, setFahrenheit] = useState(''); 
   const [celsius, setCelsius] = useState('');  

   useEffect(() => {
      getCurrentDateAndTime();
      printStar()
   }, []);

   const getCurrentDateAndTime = () => {
      const date = new Date();
      const fullDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      const time = `${date.getHours()}:${date.getMinutes()}`;
      setCurrentDate(fullDate);
      setCurrentTime(time);
   }

   const printStar = () => {
      const arr = []
      for (let i = 10; i > 0; i--) {
         let star = '';
         for (let d = 0; d < i; d++) {
            star = star + '* '
         }
         arr.push(star)
      }
      setPyramidOfStar(arr.join('\n'));
   }

   const validateEmail = (email) => {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
         Alert.alert('Alert!!', 'Valid Email Address')
      } else {
         Alert.alert('Alert!!', 'Invalid Email Address')
      }
   }
   
   const validatPhoneNo = (number) => {

      if (/^\d{10}$/.test(number)) {
         Alert.alert('Alert!!', 'Valid Phone Number')
      } else {
         Alert.alert('Alert!!', 'Invalid Phone Number')
      }
   }

   function convertFahrenheitToCelsius(temperature) {
      setCelsius((temperature - 32) * (5 / 9));
   }

   return (
      <ScrollView>
         <View style={styles.container}>
            <View style={styles.dateContainer}>
               <Text style={styles.dateText}>Today's Date: {currentDate}</Text>
               <Text style={styles.dateText}>Today's Time: {currentTime}</Text>
            </View>

            <View style={styles.emailContainer}>
               <TextInput
                  style={styles.input}
                  placeholder="Enter Email Address"
                  value={emailInput}
                  onChangeText={(text) => setEmailInput(text)}
               />
               <Button title="Enter" onPress={() => validateEmail(emailInput)} />
            </View>

            <View style={styles.phoneContainer}>
               <TextInput
                  style={styles.input}
                  placeholder="Enter Phone Number"
                  value={phoneInput}
                  onChangeText={(text) => setPhoneInput(text)}
                  keyboardType="numeric"
                  maxLength={10}
               />
               <Button title="Enter" onPress={() => validatPhoneNo(phoneInput)} />
            </View>

            <View style={styles.starContainer}>
               <Text style={styles.starText}>{pyramidOfStar}</Text>
            </View>

            <View>
               <Text>Fahrenheit To Celsius</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Enter Fahrenheit"
                  value={fahrenheit}
                  onChangeText={(text) => setFahrenheit(text)}
                  keyboardType="numeric"
               />
               <Button title="Enter" onPress={() => convertFahrenheitToCelsius(fahrenheit)} />
               {celsius ? <Text>Celsius is {celsius}</Text> : null}
            </View>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 40,
      justifyContent: 'center'
   },

   emailContainer: {
      marginBottom: 50
   },

   input: {
      padding: 20,
      borderWidth: 2,
      borderColor: '#ddd',
      marginBottom: 10
   },

   dateContainer: {
      alignSelf: 'center',
      marginBottom: 50
   },

   starContainer: {
      paddingVertical: 20
   },

   starText: {
      fontSize: 18
   }

})

export default JsBasicTask;