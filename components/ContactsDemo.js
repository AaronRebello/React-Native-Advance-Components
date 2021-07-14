
import React, { useState } from 'react';

import { Text, View, FlatList, Button } from 'react-native';
import Contacts from 'react-native-contacts';

const ContactsDemo = () => {

   const [contacts, setContacts] = useState([]); 

   const onButtonPress = () => {
      Contacts.getAll()
         .then(
            (contacts) => setContacts(contacts.slice(0, 10)), 
            error => console.log(error)
         )
   }

   return (  
      <View style={{ flex: 1, padding: 20 }}>
         <Button title="Get Contacts" onPress={onButtonPress} />
         <FlatList 
            keyExtractor={(item) => item.recordID}
            renderItem={({ item }) => (
               <View style={{ padding: 20, backgroundColor: '#ddd', marginBottom: 10 }}>
                  <Text>{item.displayName}</Text>
               </View>
            )}
            data={contacts} 
         />
      </View>
   );
}
 
export default ContactsDemo;


