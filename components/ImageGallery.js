
import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const ImageGallery = () => {
   const getImages = (num) => {
      const images = [];

      for (let i = 0; i < num; i++) {
         images.push(
            <Image
               key={i}
               style={styles.img}
               source={{ uri: `https://picsum.photos/200?random=${i}` }}
            />
         ); 
      }

      return images;
   };

   return (
      <ScrollView>
         <View>
            <View style={styles.imgContainer}>{getImages(10)}</View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   imgContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingVertical: 30,
      paddingHorizontal: 20,
   },

   img: {
      width: '47%',
      height: 150,
      marginBottom: 20,
   },
});

export default ImageGallery;
