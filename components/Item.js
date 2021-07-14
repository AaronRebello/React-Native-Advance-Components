
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = ({ data, isExpanded = false }) => {

   const { category, itemDetails } = data.item;

   return (
      <View>
         <Text style={styles.itemHeader}>{category}</Text> 
         {  isExpanded ?
            <View>
               {
                  itemDetails.map((item) => <Text style={styles.contentText} key={item.id}>{item.value}</Text>)
               }
            </View> : null
         }
      </View>
   );
}

const styles = StyleSheet.create({

   itemHeader: {
      padding: 20,
      backgroundColor: '#ddd',
   },

   contentText: {
      padding: 20,
      marginBottom: 5,
      borderBottomColor: '#ddd',
      borderBottomWidth: 2
   }

});

export default Item;