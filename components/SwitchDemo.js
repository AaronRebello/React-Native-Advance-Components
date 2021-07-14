
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';

const SwitchDemo = () => {
   const [isEnabled, setIsEnabled] = useState(false);
   const [currentUrlName, setCurrentUrlName] = useState('blubOutline');

   const imgUrls = {
      blub: require('../assets/blub-icon.png'),
      blubOutline: require('../assets/blub-outlin-icon.png'),
   };

   const onSwitchChange = (boolean) => {
      boolean ? setCurrentUrlName('blub') : setCurrentUrlName('blubOutline');

      setIsEnabled(boolean);
   };

   return (
      <View style={styles.container}>
         <View style={styles.switchContainer}>
            <Image source={imgUrls[currentUrlName]} />
            <Text style={styles.switchText}>Switch On The Light</Text>
            <Switch
               trackColor={{ false: '#767577', true: '#81b0ff' }}
               thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
               ios_backgroundColor="#3e3e3e"
               onValueChange={onSwitchChange}
               value={isEnabled}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   switchContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
   },

   switchText: {
      color: '#fff',
      fontSize: 18,
      marginTop: 20,
      marginBottom: 10,
   },
});

export default SwitchDemo;
