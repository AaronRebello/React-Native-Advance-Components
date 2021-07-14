
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const HorizontalScroll = () => {

   const data = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 10},
   ]

   return (  
      <View>
         <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               <View style={{ padding: 60, marginRight: 10, justifyContent: 'center', backgroundColor: '#ddd' }}>
                  <Text>{item.id}</Text>
               </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 20 }}
         />
      </View>
   );
}
 
export default HorizontalScroll;