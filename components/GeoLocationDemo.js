
import React, { useEffect, useState } from 'react';
import { 
   View,
   Text,
   TouchableOpacity,
   Platform,
   PermissionsAndroid,
   StyleSheet,
   Alert,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Ionicons';

const GeoLocationDemo = () => {
   const [userCordinates, setUserCordinates] = useState({
      latitude: null,
      longitude: null,
   });
   const [showUserLocation, setShowUserLocation] = useState(false);

   useEffect(() => {
      const requestLocationPermission = async () => {
         if (Platform.OS === 'android' && Platform.Version >= 23) {
            const granted = await PermissionsAndroid.request(
               PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
               {
                  title: 'Permissions for location access',
                  message:
                     'Give permission to your location to scan the bluetooth devices',
                  buttonPositive: 'ok',
               }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
               console.log('You can use the location');
            } else {
               console.log('permission denied');
               return;
            }
         }
      };

      requestLocationPermission();
   }, []);

   const UserLocation = ({ latitude, longitude }) => {
      return (
         <View>
            <Text>Latitude: {latitude ?? '----'} </Text>
            <Text>Longitude: {longitude ?? '----'} </Text>
         </View>
      );
   };

   const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
         (position) => {
            const { latitude, longitude } = position.coords;
            setShowUserLocation(true);
            setUserCordinates({ latitude, longitude });
         },
         (error) => Alert.alert('Alert!!!', error)
      );
   };

   return (
      <View style={styles.container}>
         <Text style={styles.locationIconCotainer}>
            <Icon name="location" size={100} color="#344fa1" />
         </Text>
         {showUserLocation ? <UserLocation {...userCordinates} /> : null}
         <TouchableOpacity
            style={styles.locationBtn}
            onPress={() => getCurrentLocation()}>
            <Text style={styles.locactionBtnText}>Get Current Location</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

   locationIconCotainer: {
      alignSelf: 'center',
   },

   locationBtn: {
      padding: 20,
      backgroundColor: '#7D82B6',
      width: 180,
      marginTop: 5,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
   },

   locactionBtnText: {
      alignSelf: 'center',
      color: '#fff',
   },
});

export default GeoLocationDemo;
