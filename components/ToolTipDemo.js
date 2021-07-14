
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

const ToolTipDemo = () => {

   const [toolTipVisible, setToolTipVisible] = useState(false); 

   return (
      <View style={{  flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Tooltip
            isVisible={toolTipVisible}
            content={<View><Text>Check this out!</Text></View>}
            placement="top"
            onClose={() => setToolTipVisible(false)}
            accessible={false}
         >
            <TouchableOpacity 
               style={{ padding: 20, backgroundColor: '#ddd', width: 200}}
               onPress={() => setToolTipVisible(!toolTipVisible)}
            >
               <Text style={{ alignSelf: 'center' }}>Press me</Text>
            </TouchableOpacity>
         </Tooltip>
      </View>
   );
}

export default ToolTipDemo;