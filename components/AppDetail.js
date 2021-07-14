
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import { fonts, colors } from '../constants';

const styles = StyleSheet.create({

   container: {
      flex: 1,
      padding: 40,
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: 'red',
   },

   textCenter: {
      textAlign: 'center'
   },

   headingsAndSvgContainer: {

   },

   heading: {
      fontFamily: fonts.BalooTammuduSemiBold,
      fontSize: 24,
      alignSelf: 'center'
   },

   subHeading: {
      lineHeight: 22,
      fontSize: 14,
      fontFamily: fonts.BalooTammuduRegular,
      marginBottom: 10
   },

   nextBtn: {
      padding: 10,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
   },

   nextText: {
      alignSelf: 'center',
      fontFamily: fonts.BalooTammuduSemiBold,
      fontSize: 18,
      color: '#fff',
      marginTop: 10,
   },

   svgContainer: {
      alignSelf: 'center'
   }

});

const AppDetail = ({ heading, subHeading, svgComponent, btnText, OnBtnPress }) => {
   return (  
      <View style={styles.container}>
         <View style={styles.headingsAndSvgContainer}>
            <View>
               <Text style={[styles.textCenter, styles.heading]}>{heading}</Text>
               <Text style={[styles.textCenter, styles.subHeading]}>
                  {subHeading}
               </Text>
            </View>
            <View style={styles.svgContainer}>
               {svgComponent}
            </View>
         </View>
         
         <View style={{  alignSelf: 'stretch' }}>
            <TouchableOpacity style={styles.nextBtn} onPress={OnBtnPress}>
               <Text style={styles.nextText}>{btnText}</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}
 
export default AppDetail;