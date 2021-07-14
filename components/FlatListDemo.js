import React from 'react';
import { View, Text } from 'react-native';

import UserList from './UserList';

const FlatListDemo = ({ navigation }) => {
   return (
      <View>
         <UserList navigation={navigation} />
      </View>
   );
};

export default FlatListDemo;
