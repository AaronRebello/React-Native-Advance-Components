import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const User = ({ route }) => {
   const { id } = route.params;

   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(false); 

   useEffect(() => {
      const getUser = async () => {
         setIsLoading(true);

         const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
         );

         const data = await response.json();

         setUser(data);

         setIsLoading(false);
      };

      getUser();
   }, []);

   const renderUser = () => {
      return isLoading ? (
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading!!!</Text>
         </View>
      ) : (
         <View>
            <View style={styles.userImgContainer}>
               <Image
                  source={{ uri: `https://robohash.org/${id}?size=200x200` }}
                  style={styles.userImg}
               />
            </View>

            <View style={styles.userInfoContainer}>
               <Text style={styles.userInfoText}>
                  <Icon style={styles.icons} name="person" size={20} />
                  {user.name}
               </Text>
               <Text style={styles.userInfoText}>
                  <Icon style={styles.icons} name="mail" size={20} />
                  <Text>{user.email}</Text>
               </Text>
               <Text style={styles.userInfoText}>
                  <Icon style={styles.icons} name="call" size={20} />
                  {user.phone}
               </Text>
               <Text style={styles.userInfoText}>
                  <Icon style={styles.icons} name="location" size={20} />
                  {`${user?.address?.street}, ${user?.address?.city}`}
               </Text>
            </View>
         </View>
      );
   };

   return <View style={styles.center}>{renderUser()}</View>;
};

const styles = StyleSheet.create({
   center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

   userInfoContainer: {
      backgroundColor: '#F1F1F1',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      padding: 30,
   },

   userInfoText: {
      marginBottom: 10,
   },

   icons: {
      marginRight: 10,
   },

   userImgContainer: {
      alignSelf: 'center',
      backgroundColor: 'red',
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
   },

   userImg: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#F79393',
      // transform: [{ translateY: 20 }]
   },
});

export default User;
