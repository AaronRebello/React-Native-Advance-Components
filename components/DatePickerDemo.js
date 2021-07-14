
import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

import DatePicker from 'react-native-date-picker';

const DatePickerDemo = () => {

   const [date, setDate] = useState(new Date());

   return (  
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <DatePicker
            date={date}
            onDateChange={setDate}
            style={{ width: Dimensions.get('screen').width }}
         />
      </View>
   );
}
 
export default DatePickerDemo;