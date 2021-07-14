
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditInput = ({ modalVisible, toogleModal, value, onValueChange, onEditSumbit }) => {
   return (  
      <Modal visible={modalVisible} animationType="slide">
         <View style={styles.modalContainer}>
            <View>
               <Text style={styles.cancelIcon} onPress={toogleModal}>
                  <Icon name="close-outline" size={40} color="#fff" />
               </Text>
               <TextInput 
                  style={styles.input}
                  placeholder="Edit Username"
                  value={value}
                  onChangeText={onValueChange}
                  onEndEditing={onEditSumbit}
               />
               <Button title="Enter" onPress={onEditSumbit} />
            </View>
         </View>
      </Modal>
   );
}

const styles = StyleSheet.create({

   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
   },

   input: {
      padding: 20,
      borderWidth: 2,
      borderColor: '#6b6a6a',
      marginBottom: 10,
      backgroundColor: '#fff'
   },

   cancelIcon: {
      padding: 10,
      alignSelf: 'flex-end', 
      marginBottom: 20 
   }

})
 
export default EditInput;