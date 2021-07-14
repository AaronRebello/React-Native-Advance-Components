
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

import Item from './Item';

const data = [
   { 
      id: 1, 
      item: { 
         category: 'Item 1', 
         itemDetails: [
            { 
               id: Math.floor(Math.random() * 100) + 1, 
               value: 'Lorem ipsum dolor sit.' 
            },
            { 
               id: Math.floor(Math.random() * 100) + 1, 
               value: 'asdfadfadflakflj'
            },
         ] 
      }
   },
   { 
      id: 2, 
      item: { 
         category: 'Item 2', 
         itemDetails: [
            { 
               id: Math.floor(Math.random() * 100) + 1, 
               value: 'Lorem ipsum dolor sit.' 
            }
         ] 
      }
   },
   { 
      id: 3, 
      item: { 
         category: 'Item 3', 
         itemDetails: [
            { 
               id: Math.floor(Math.random() * 100) + 1, 
               value: 'Lorem ipsum dolor sit.' 
            }
         ] 
      }
   },
   { 
      id: 4, 
      item: { 
         category: 'Item 4', 
         itemDetails: [
            { 
               id: Math.floor(Math.random() * 100) + 1, 
               value: 'Lorem ipsum dolor sit.' 
            },
            { 
               id: Math.floor(Math.random() * 100) + 1, 
               value: 'oiwejinsdfsfjfo.' 
            }
         ] 
      }
   }
]

const ExpandableList = ({ single = false }) => {
  
   const [currentSelected, setCurrentSelected] = useState(null);

   return (  
      <View style={{ flex: 1 }}>
         <FlatList 
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({ item, index }) => {
               return (
                  <TouchableOpacity onPress={() => {
                     if(single) {
                        setCurrentSelected(index)
                     }
                  }}>
                     <Item 
                        data={item} 
                        isExpanded={single ? currentSelected === index ? true : false : false} 
                     /> 
                  </TouchableOpacity>
               );
            }}
         />  
      </View>
   );
}
 
export default ExpandableList;