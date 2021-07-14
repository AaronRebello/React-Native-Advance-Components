
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


const styles = StyleSheet.create({

   container: {
      flex: 1,
      justifyContent: 'center'
   },

   image: {
      width: 200,
      height: 200,
      marginBottom: 20,
      alignSelf: 'center', 
   }

});

const ImageUpload = () => {

   const [uri, setUri] = useState('');

   const onUpload = () => { 
      launchImageLibrary(
         { mediaType: 'photo', includeBase64: true },
         (response) => {
            if(!response?.didCancel) {  
               const { type, base64 } = response.assets[0]; 
               setUri(`data:${type};base64,${base64}`); 
            }
         }
      ) 
   }

   return (  
      <View style={styles.container}>
         { uri ? <Image style={styles.image} source={{ uri }} /> : null }
         <Button 
            title="Upload Image"
            onPress={onUpload}
         />
      </View>
   );
}
 
export default ImageUpload;