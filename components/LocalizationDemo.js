
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
   en: {
      how: "How do you want your egg today?",
      boiledEgg: "Boiled egg",
      softBoiledEgg: "Soft-boiled egg",
      choice: "How to choose the egg"
   },
   it: {
      how: "Come vuoi il tuo uovo oggi?",
      boiledEgg: "Uovo sodo",
      softBoiledEgg: "Uovo alla coque",
      choice: "Come scegliere l'uovo"
   },
   ja: {
      how: "今日の卵はどうしますか？",
      boiledEgg: "ゆで卵",
      softBoiledEgg: "半熟玉子",
      choice: "卵の選び方"
   }
});

const LocalizationDemo = () => {

   const [currenLang, setCurrenLang] = useState('en');

   const changeLanguage = (language) => {
      strings.setLanguage(language); 
      setCurrenLang(language);
   }

   return (
      <View style={styles.container}>
         <View style={styles.textContainer}>
            <Text style={styles.text}>{strings.how}</Text>
            <Text style={styles.text}>{strings.boiledEgg}</Text>
            <Text style={styles.text}>{strings.softBoiledEgg}</Text>
            <Text style={styles.text}>{strings.choice}</Text>
         </View>
         <Text style={styles.changeText}>Change The Text</Text>
         <View style={styles.buttonContainer}>
            <Button title="English" onPress={() => changeLanguage('en')} />
            <Button title="Italy" onPress={() => changeLanguage('it')} />
            <Button title="Japanese" onPress={() => changeLanguage('ja')} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      justifyContent: 'center',
      padding: 40
   },

   textContainer: {
      padding: 20,
      backgroundColor: '#ddd',
   },

   text: {
      marginBottom: 5,
      fontSize: 16
   },

   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },

   changeText: {
      padding: 20,
      alignSelf: 'center',
      fontSize: 18
   }

})

export default LocalizationDemo;