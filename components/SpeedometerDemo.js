// Visualize data with Speedometer Graph in React Native
// https://aboutreact.com/react-native-speedometer-graph/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';

//Import library for Speedometer
import RNSpeedometer from 'react-native-speedometer'; 
 
const SpeedometerDemo = () => {
  const [meterValue, setMeterValue] = useState(20);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <RNSpeedometer
          value={meterValue}
          //value for Speedometer
          size={200}
          //Size of Speedometer
          minValue={0}
          //Min value for Speedometer
          maxValue={100}
          //Max value for Speedometer
          allowedDecimals={0}
          //Decimals value allowed or not
          labels={[
            {
              name: 'Low Risk',
              labelColor: '#ff2900',
              activeBarColor: '#ff2900',
            },
            {
              name: 'Medium Risk',
              labelColor: '#f4ab44',
              activeBarColor: '#f4ab44',
            },
            {
              name: 'High Risk',
              labelColor: '#00ff6b',
              activeBarColor: '#00ff6b',
            },
          ]}
          //Labels for the different steps of Speedometer
        />
        <View style={{ marginTop: 70, padding: 20 }}>
          <Text style={{ fontSize: 20 }}>
            Enter the value for the speedometer graph between 0 to 100
          </Text>
          <TextInput
            placeholder="Enter Speedometer Value"
            style={styles.textInput}
            onChangeText={(value) => setMeterValue(value)}
            keyboardType="numeric"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpeedometerDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 25,
    fontSize: 16,
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
});
