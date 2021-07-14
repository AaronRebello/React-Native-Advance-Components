import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const AutoCompleteDemo = () => {
   const data = [
      { id: 1, title: 'Fast and Furious' },
      { id: 2, title: 'The Avengers' },
      { id: 3, title: 'Avengers: Endgame' },
      { id: 4, title: 'Avatar' }, 
      { id: 5, title: 'Spider-Man: Home Coming' },
   ];

   const [films, setFilms] = useState([]);

   const [inputValue, setInputValue] = useState('');

   const renderFilm = ({ item }) => (
      <TouchableOpacity onPress={() => setInputValue(item.title)}>
         <Text>{item.title}</Text>
      </TouchableOpacity>
   );

   const onInputChange = (text) => {
      if (text === '') {
         setFilms([]);
      } else {
         const filteredFilms = data.filter(({ title }) =>
            title.toLowerCase().includes(text.toLowerCase())
         );

         setFilms(filteredFilms);
      }

      setInputValue(text);
   };

   return (
      <View style={{ flex: 1 }}>
         <View style={{ flex: 1, padding: 20 }}>
            <Autocomplete
               autoCapitalize="none"
               autoCorrect={false}
               data={films}
               flatListProps={{
                  keyExtractor: (item) => item.id,
                  renderItem: renderFilm,
               }}
               value={inputValue} 
               onChangeText={onInputChange} 
            />
         </View>
      </View>
   );
};

export default AutoCompleteDemo;
