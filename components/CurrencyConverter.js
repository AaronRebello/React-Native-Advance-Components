
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

import api from '../currency-api/api';

const CurrencyConverter = () => {
   const [selectedCurrency, setSelectedCurrency] = useState('INR');
   const [allCurrencyName, setAllCurrencyName] = useState({});

   const [euroRate, setEuroRate] = useState(1);
   const [conversionRate, setConversionRate] = useState('');

   useEffect(() => {
      const getAllCurrencyName = async () => {
         const response = await api.get('/symbols');
         console.log(JSON.stringify(response, null, 2));
         response.data.success ? setAllCurrencyName(response.data.symbols)
            : Alert.alert("Alert!!", response.data.error.info); 

      };

      getAllCurrencyName();
   }, []);

   useEffect(() => {

      if (selectedCurrency === undefined) {
         return;
      }

      const getConvertedRate = async () => {
         const response = await api.get('/latest', {
            params: {
               symbols: selectedCurrency,
            },
         });

         if (response.data.success) {
            const rates = response.data.rates;
            const result = (rates[selectedCurrency] * Number(euroRate)).toFixed(2);
            setConversionRate(result);
         } else {
            Alert.alert("Alert!!", response.data.error.info);
         }

      };

      getConvertedRate();
   }, [euroRate, selectedCurrency]);



   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.headingText}>Curreny Convert Based on Euro (EUR)</Text>
            <View style={styles.inputsContainer}>
               <TextInput
                  style={styles.input}
                  value={euroRate.toString()}
                  onChangeText={text => setEuroRate(text)}
                  keyboardType="numeric"
               />
               <TextInput
                  style={styles.input}
                  defaultValue="Europe (EUR)"
                  editable={false}
               />
               <TextInput
                  style={styles.input}
                  defaultValue={conversionRate.toString()}
                  editable={false}
               />
               <View style={styles.pickerContainer}>
                  <Picker
                     style={{ height: '100%' }}
                     mode="dialog"
                     selectedValue={selectedCurrency}
                     onValueChange={(itemValue, itemIndex) => {
                        setSelectedCurrency(itemValue);
                     }}>
                     <Picker.Item label="Select Currency" value="none" enabled={false} />
                     {Object.keys(allCurrencyName).map(key => (
                        <Picker.Item
                           key={key}
                           label={`${allCurrencyName[key]} (${key})`}
                           value={key}
                        />
                     ))}
                  </Picker>
               </View>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
   },

   input: {
      padding: 20,
      borderWidth: 2,
      borderColor: '#ddd',
      borderRadius: 10,
      flexBasis: '48%',
      marginBottom: 12,
      fontSize: 16,
      color: 'black'
   },

   inputsContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
   },

   pickerContainer: {
      flexBasis: '48%',
      borderWidth: 2,
      borderColor: '#ddd',
      borderRadius: 10,
      height: 70,
   },

   headingText: {
      alignSelf: 'center',
      fontSize: 18,
      marginBottom: 20
   }
});

export default CurrencyConverter;
