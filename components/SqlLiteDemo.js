
import React, { useEffect, useState } from 'react';
import {
   View,
   Text,
   FlatList,
   SafeAreaView, TextInput,
   TouchableOpacity,
   StyleSheet,
   Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

import EditInput from './EditInput';
import { createTable, getAllUser, addUser, deleteAllUser, deleteUser, updateUser, getUser } from '../Utility/SqlUtility';



const SqlLiteDemo = () => {

   const [users, setUsers] = useState([]);
   const [inputValue, setInputValue] = useState('');
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [editInputValue, setEditInputValue] = useState('');
   const [singlUser, setSingleUser] = useState({});

   useEffect(() => {

      createTable();
      getAllUser(setUsers);

   }, []);

   const toogleModal = () => {
      setIsModalVisible(!isModalVisible); 
   }

   const onEditBtnPress = (user) => {
      getUser(user.id, setSingleUser);
      setEditInputValue(user.name);
      toogleModal();
   }

   const onEditSumbit = () => {
      updateUser(singlUser.id, editInputValue);  
      getAllUser(setUsers);
      toogleModal()
   }

   const onInsertBtnPress = () => {
      if (inputValue !== '') {
         addUser(inputValue);
         getAllUser(setUsers);
         setInputValue('');
      }
   }

   const onDeleteAllBtnPress = () => {
      deleteAllUser();
      getAllUser(setUsers);
      Alert.alert("Alert!!", "All users are deleted");
   }

   const onDeletBtnPress = (user) => {
      Alert.alert(
         "Alert!!",
         `Are you sure you want to delete a user "${user.name}"`,
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
            },
            {
               text: "Yes", 
               onPress: () => {
                  deleteUser(user.id);
                  getAllUser(setUsers); 
               }
            }
         ],
         { cancelable: false } 
      );
   }


   return (
      <SafeAreaView style={styles.container}> 
         <View>
            <FlatList
               ListHeaderComponent={(
                  <>
                     <TextInput
                        placeholder="Enter User Name"  
                        style={styles.input}
                        value={inputValue}
                        onChangeText={(text) => setInputValue(text)}
                        onEndEditing={onInsertBtnPress}
                     />

                     <View style={styles.btnContainer}>
                        <TouchableOpacity
                           style={styles.btn}
                           onPress={() => onInsertBtnPress()} 
                        >
                           <Text style={styles.btnText}>Insert</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={styles.btn}
                           onPress={() => onDeleteAllBtnPress()}
                        >
                           <Text style={styles.btnText}>Delete All</Text>
                        </TouchableOpacity>
                     </View>
                     {
                        isModalVisible ? (
                           <EditInput 
                              modalVisible={isModalVisible} 
                              toogleModal={toogleModal} 
                              value={editInputValue} 
                              onValueChange={(text) => setEditInputValue(text)}
                              onEditSumbit={onEditSumbit}
                           />
                        ) : null
                     }
                  </>
               )}
               data={users} 
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
                  <View style={styles.userContainer}>
                     <Text style={{ textTransform: 'capitalize' }}> 
                        {item.name}
                     </Text>
                     <View style={styles.iconContaner}>
                        <TouchableOpacity onPress={() => onEditBtnPress(item)}>
                           <Text style={styles.icon}>
                              <Icon name="pencil-outline" size={20} />
                           </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onDeletBtnPress(item)}>
                           <Text style={styles.icon}>
                              <Icon name="trash-outline" size={20} />
                           </Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               )}
               ListEmptyComponent={() => <Text>Empty</Text>}
            />
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({ 

   container: {
      flex: 1,
      padding: 20
   },

   input: {
      borderColor: '#ddd',
      borderWidth: 2,
      padding: 20
   },

   btn: {
      padding: 10,
      backgroundColor: 'blue',
      flexBasis: '40%',
      marginVertical: 20,
      borderRadius: 5
   },

   btnText: {
      color: '#fff',
      alignSelf: 'center'
   },

   btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
   },

   userContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ddd',
      padding: 20,
      marginBottom: 10
   },

   iconContaner: {
      flexDirection: 'row'
   },

   icon: {
      padding: 10,
   }

});

export default SqlLiteDemo;