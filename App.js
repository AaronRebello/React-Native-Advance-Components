import React, { Component } from 'react';
import AppContainer from './routes/StackNavigator'
import {
   StatusBar,
} from 'react-native';
export default class App extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <>
            <StatusBar backgroundColor="#8600b3" />
            <AppContainer />
         </>
      );
   }
}

