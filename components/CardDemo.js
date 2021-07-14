
import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

const CardDemo = () => {
   return (  
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider /> 
            <Card.Image source={{ uri: 'https://picsum.photos/id/866/536/354' }} /> 
            <Text style={{ marginTop: 10 }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur mollitia quis nihil voluptatum velit dolore voluptatem eaque, laborum cum pariatur!
            </Text>
         </Card>
      </View>
   );
}
 
export default CardDemo;