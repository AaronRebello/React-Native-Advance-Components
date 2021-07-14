
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import AppDetail from './AppDetail';
import { onBoardData } from '../static-data';
import { colors } from '../constants';

const styles = StyleSheet.create({

   paginationContainer: { 
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '25%'
   },

   dotStyle: {
      width: 20,
      height: 20,
      borderRadius: 10
   }

});


const SnapCarouselDemo = ({ navigation }) => {

   const dimensions = Dimensions.get('window');
   const carouselRef = useRef();

   const [activeSlide, setActiveSlide] = useState(0);

   return (
      <View style={{ flex: 1 }}>
         <Carousel
            ref={carouselRef}
            data={onBoardData}
            renderItem={({ item, index }) => (
               <AppDetail
                  OnBtnPress={() => {
                     index === (onBoardData.length - 1)
                        ? navigation.navigate('Home')
                        : carouselRef.current.snapToNext()
                  }}
                  {...item}
               />
            )}
            sliderWidth={dimensions.width}
            itemWidth={dimensions.width}
            onSnapToItem={(index) => setActiveSlide(index)}
         />
         <Pagination
            dotsLength={onBoardData.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={[styles.dotStyle, { backgroundColor: colors.primary }]}
            inactiveDotStyle={[styles.dotStyle, { borderColor: 'black', borderWidth: 2, backgroundColor: 'transparent' }]} 
            inactiveDotOpacity={1}
            inactiveDotScale={1}
         />
      </View>
   );
}

export default SnapCarouselDemo;