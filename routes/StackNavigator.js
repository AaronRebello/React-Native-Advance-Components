import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginAppScreen from '../screens/LoginAppScreen';
import HomeScreen from '../screens/HomeScreen';
import TextInputDemo from '../components/TextInputDemo';
import ImageGallery from '../components/ImageGallery';
import SwitchDemo from '../components/SwitchDemo';
import FlatListDemo from '../components/FlatListDemo';
import User from '../components/User';
import LoadingDemo from '../components/LoadingDemo';
import ModalDemo from '../components/ModalDemo';
import GeoLocationDemo from '../components/GeoLocationDemo';
import BouncingBallAnimation from '../components/BouncingBallAnimation';
import SqlLiteDemo from '../components/SqlLiteDemo';
import StopwatchTimerDemo from '../components/StopwatchTimerDemo';
import CalenderEventDemo from '../components/CalenderEventDemo';
import ChartkitDemo from '../components/ChartkitDemo';
import PressableDemo from '../components/PressableDemo';
import CountdownDemo from '../components/CountdownDemo';
import CardDemo from '../components/CardDemo';
import DatePickerDemo from '../components/DatePickerDemo';
import HorizontalScroll from '../components/HorizontalScroll';
import ExpandableList from '../components/ExpandableList';
import WebviewDemo from '../components/WebviewDemo'
import AccordionDemo from '../components/AccordionDemo';
import GooglePlaystoreDemo from '../components/GooglePlaystoreDemo';
import CircleButtonDemo from '../components/CircleButtonDemo';
import ActionButtonDemo from '../components/ActionButtonDemo';
import UniqueDeviceId from '../components/UniqueDeviceId';
import QrCodeScanner from '../components/QrCodeScanner';
import CallDemo from '../components/CallDemo';
import WatsappMessage from '../components/WatsappMessage';
import SendSmsDemo from '../components/SendSmsDemo'
import ShapeViewDemo from '../components/ShapeViewDemo';
import CarouselDemo from '../components/CarouselDemo';
import DownloadImageDemo from '../components/DownloadImageDemo';
import MultipleSelectDropdownImage from '../components/MultipleSelectDropdownImage';
import QRCodeGenerator from '../components/QrCodeGenerator';
import SpeedometerDemo from '../components/SpeedometerDemo';
import CheckboxDemo from '../components/CheckboxDemo';
import GestureDemo from '../components/GestureDemo';
import NetinfoDemo from '../components/NetinfoDemo';
import ScreenShotDemo from '../components/ScreenShotDemo';
import CircularPickerDemo from '../components/CircularPickerDemo';
import CircularActionMenuDemo from '../components/CircularActionMenuDemo';
import ToolTipDemo from '../components/ToolTipDemo';
import ZoomImageDemo from '../components/ZoomImageDemo';
import GoogleLogin from '../components/GoogleLogin';
import SearchableDropdownDemo from '../components/SearchableDropdownDemo';
import StateDemo from '../components/StateDemo';
import Webview1TimeLoader from '../components/Webview1TimeLoader';
import WebviewAllTimeLoader from '../components/WebviewAllTimeLoader';
import CalculatorDemo from '../components/CalculatorDemo';
import NumberPrintingDemo from '../components/NumberPrintingDemo';
import FactorialDemo from '../components/FactorialDemo';
import AccessContactList from '../components/AccessContact/AccessContactList';
import CallDetectionDemo from '../components/CallDetectionDemo';
import AccessCallLogs from '../components/AccessCallLogs';
import AxiosDemo from '../components/AxiosDemo';
import AutoCompleteDemo from '../components/AutoCompleteDemo';
import config from '../config';
import PrintNumber from '../components/PrintNumber';
import SimpleCalculator from '../components/SimpleCalculator';
import Factorial from '../components/Factorial';
import FibonnaciSeries from '../components/FibonnaciSeries';
import CameraDemo from '../components/CameraDemo';
import CallLogsDemo from '../components/CallLogsDemo';
import ContactsDemo from '../components/ContactsDemo';
import TreeviewDemo from '../components/TreeviewDemo';
import SegmentedControlTabs from '../components/SegmentedControlTabs';
import BottumSheetDemo from '../components/BottumSheetDemo'
import ZoomEffectDemo from '../components/ZoomEffectDemo';
import BlinkingTextAnimation from '../components/BlinkingTextAnimation';
import RotateImageView from '../components/RotateImageView';
import MultiLanguageDemo from '../components/MultiLanguage/MultiLanguageDemo';
import LocalizationDemo from '../components/LocalizationDemo';
import UploadFileDemo from '../components/UploadFileDemo';
import CurrencySymbolsDemo from '../components/CurrencySymbolsDemo';
import VideoDemo from '../components/VideoDemo';
import JsPractice from '../components/JsPractice';
import JsBasicTask from '../components/JsBasicTask';
import DeviceInfo from '../components/DeviceInfo';
import SnapCarouselDemo from '../components/SnapCarouselDemo';
import ReanimatedDemo from '../components/ReanimatedDemo';
import CurrencyConverter from '../components/CurrencyConverter';
import FormAnimation from '../components/FormAnimation';
import ImageUpload from '../components/ImageUpload';

const Stack = createStackNavigator();

export default AppContainer = () => {
    return (
        <NavigationContainer>
         <Stack.Navigator initialRouteName="LoginApp" 
         screenOptions={{
            headerStyle:{
            backgroundColor:"#8600b3",
            },
            headerTintColor: "#fff",
         }}>
            <Stack.Screen name="LoginApp" component={LoginAppScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TextInput" component={TextInputDemo} />
            <Stack.Screen name="ImageGallery" component={ImageGallery} />
            <Stack.Screen name="Switch" component={SwitchDemo} />
            <Stack.Screen name="FlatList" component={FlatListDemo} />
            <Stack.Screen name="Loading" component={LoadingDemo} />
            <Stack.Screen name="Modal" component={ModalDemo} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="GeoLocation" component={GeoLocationDemo} />
            <Stack.Screen name="BouncingBall" component={BouncingBallAnimation} />
            <Stack.Screen name="SqlLite" component={SqlLiteDemo} />
            <Stack.Screen name="Countdown" component={CountdownDemo} />
            <Stack.Screen name="Card" component={CardDemo} />
            <Stack.Screen name="DatePicker" component={DatePickerDemo} />
            <Stack.Screen name="HorizontalScroll" component={HorizontalScroll} />
            <Stack.Screen name="StopwatchTimer" component={StopwatchTimerDemo} />
            <Stack.Screen name="CalenderEvent" component={CalenderEventDemo} />
            <Stack.Screen name="Chartkit" component={ChartkitDemo} />
            <Stack.Screen name="PressableScreen" component={PressableDemo} />
            <Stack.Screen name="WebviewScreen" component={WebviewDemo} />
            <Stack.Screen name="AccordionScreen" component={AccordionDemo} />
            <Stack.Screen name="GooglePlaystoreScreen" component={GooglePlaystoreDemo} />
            <Stack.Screen name="CircleButtonScreen" component={CircleButtonDemo} />
            <Stack.Screen name="ActionButtonScreen" component={ActionButtonDemo} />
            <Stack.Screen name="UniqueDeviceIdScreen" component={UniqueDeviceId} />
            <Stack.Screen name="CallScreen" component={CallDemo} />
            <Stack.Screen name="WatsappMessageScreen" component={WatsappMessage} />
            <Stack.Screen name="QRCodeGeneratorScreen" component={QRCodeGenerator} />
            <Stack.Screen name="QrCodeScannerScreen" component={QrCodeScanner} />
            <Stack.Screen name="smsScreen" component={SendSmsDemo} />
            <Stack.Screen name="ShapesScreen" component={ShapeViewDemo} />
            <Stack.Screen name="CarouselDemoScreen" component={CarouselDemo} />
            <Stack.Screen name="MultipleSelectScreen" component={MultipleSelectDropdownImage} />
            <Stack.Screen name="DownloadScreen" component={DownloadImageDemo} />
            <Stack.Screen name="SpeedometerScreen" component={SpeedometerDemo} />
            <Stack.Screen name="GestureScreen" component={GestureDemo} />
            <Stack.Screen name="NetinfoScreen" component={NetinfoDemo} />
            <Stack.Screen name="ScreenShotScreen" component={ScreenShotDemo} />
            <Stack.Screen name="CircularPickerScreen" component={CircularPickerDemo} />
            <Stack.Screen name="ZoomImageScreen" component={ZoomImageDemo} />
            <Stack.Screen name="GoogleLoginScreen" component={GoogleLogin} />
            <Stack.Screen name="SearchableDropdownScreen" component={SearchableDropdownDemo} />
            <Stack.Screen name="StateDemoScreen" component={StateDemo} />
            <Stack.Screen name="Webview1TimeLoaderScreen" component={Webview1TimeLoader} />
            <Stack.Screen name="WebviewAllTimeLoaderScreen" component={WebviewAllTimeLoader} />
            <Stack.Screen name="CalculatorScreen" component={CalculatorDemo} />
            <Stack.Screen name="NumberPrintingScreen" component={NumberPrintingDemo} />
            <Stack.Screen name="FactorialScreen" component={FactorialDemo} />
            <Stack.Screen name="CameraScreen" component={CameraDemo} />
            <Stack.Screen name="AxiosScreen" component={AxiosDemo} />

            <Stack.Screen name="CallDetectionScreen" component={CallDetectionDemo} />
            {/* <Stack.Screen name="CircularActionMenuScreen" component={CircularActionMenuDemo} /> */}
            {/* <Stack.Screen name="CheckboxScreen" component={CheckboxDemo} /> */}
            <Stack.Screen name="ToolTip" component={ToolTipDemo} />
            <Stack.Screen name="AutoComplete" component={AutoCompleteDemo} />
            <Stack.Screen name="PrintNumber" component={PrintNumber} />
            <Stack.Screen name="SimpleCalculator" component={SimpleCalculator} />
            <Stack.Screen name="Factorial" component={Factorial} />
            <Stack.Screen name="FibonnaciSeries" component={FibonnaciSeries} />
            <Stack.Screen name="Camera" component={CameraDemo} />
            <Stack.Screen name="CallLogs" component={CallLogsDemo} />
            <Stack.Screen name="Contacts" component={ContactsDemo} />
            <Stack.Screen name="CallLogsScreen" component={AccessCallLogs} />
            <Stack.Screen name="ContactListScreen" component={AccessContactList} />
            <Stack.Screen name="TreeviewScreen" component={TreeviewDemo} />
            <Stack.Screen name="BottumSheetScreen" component={BottumSheetDemo} />
            <Stack.Screen name="ZoomEffectScreen" component={ZoomEffectDemo} />
            <Stack.Screen name="BlinkingTextAnimationScreen" component={BlinkingTextAnimation} />
            <Stack.Screen name="SegmentedControlTabsScreen" component={SegmentedControlTabs} />
            <Stack.Screen name="RotateImageViewScreen" component={RotateImageView} />
            <Stack.Screen name="MultiLanguageScreen" component={MultiLanguageDemo} />
            <Stack.Screen name="Localization" component={LocalizationDemo} />
            <Stack.Screen name="UploadFileScreen" component={UploadFileDemo} />
            <Stack.Screen name="CurrencySymbolsScreen" component={CurrencySymbolsDemo} />
            <Stack.Screen name="VideoScreen" component={VideoDemo} />
            <Stack.Screen name="JsPracticeScreen" component={JsPractice} />
            <Stack.Screen name="JsBasicTask" component={JsBasicTask} />
            <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
            <Stack.Screen name="SnapCarousel" component={SnapCarouselDemo} options={{ headerShown: false }} />
            <Stack.Screen name="Reanimated" component={ReanimatedDemo} />
            <Stack.Screen name="CurrencyConverter" component={CurrencyConverter} />
            <Stack.Screen name="Set Up your profile" component={FormAnimation} />
            <Stack.Screen name="ImageUpload" component={ImageUpload} />

            <Stack.Screen name="ExpandableList">
               {(props) => <ExpandableList {...props} single={true} />}
            </Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
    )
}

