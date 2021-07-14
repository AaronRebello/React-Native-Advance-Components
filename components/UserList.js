import React, { useState, useEffect } from 'react';
import {
   View,
   Text,
   FlatList,
   SafeAreaView,
   TouchableOpacity,
   StyleSheet,
   ScrollView,
} from 'react-native';

const UserList = ({ navigation }) => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const getUserList = async () => {
         const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
         );

         const data = await response.json();

         setUsers(data);
      };

      getUserList();
   }, []);

   const renderUser = ({ item }) => (
      <View style={{ paddingHorizontal: 20 }}>
         <View style={styles.userBox}>
            <Text>{item.name}</Text>
            <TouchableOpacity
               style={styles.viewMoreBtn}
               onPress={() => navigation.navigate('User', { id: item.id })}>
               <Text style={styles.viewMoreText}>View More</Text>
            </TouchableOpacity>
         </View>
      </View>
   );

   return (
      <SafeAreaView>
         <View style={{ paddingVertical: 20 }}>
            <FlatList
               data={users}
               keyExtractor={(item) => item.id}
               renderItem={renderUser}
               style={{ maxHeight: '100%' }}
               ListHeaderComponent={
                  <Text style={styles.userListText}>UserList</Text>
               }
            />
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   userBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#EFEFEF',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },

   viewMoreBtn: {
      backgroundColor: '#B9B9B9',
      padding: 10,
      borderRadius: 5,
   },

   viewMoreText: {
      color: '#fff',
   },

   userListText: {
      alignSelf: 'center',
      fontSize: 20,
      marginVertical: 15,
   },
});

export default UserList;
