
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
   return (
      <ScrollView>
         <View style={styles.container}>
            <Button
               title="Go to Form Animation"
               onPress={() => navigation.navigate('Set Up your profile')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Accordion Demo"
               onPress={() => navigation.navigate('AccordionScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Action Button Demo"
               onPress={() => navigation.navigate('ActionButtonScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Auto Complete"
               onPress={() => navigation.navigate('AutoComplete')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Axios Demo"
               onPress={() => navigation.navigate('AxiosScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Bouncing Ball Animation"
               onPress={() => navigation.navigate('BouncingBall')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="BottumSheet Demo"
               onPress={() => navigation.navigate('BottumSheetScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="BlinkingTextAnimation Demo"
               onPress={() => navigation.navigate('BlinkingTextAnimationScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Countdown Demo"
               onPress={() => navigation.navigate('Countdown')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Card"
               onPress={() => navigation.navigate('Card')}
            />
            <View style={{ height: 20 }}></View>

            <Button
               title="Carousel Demo"
               onPress={() => navigation.navigate('CarouselDemoScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Calender Event Demo"
               onPress={() => navigation.navigate('CalenderEvent')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Chartkit Demo"
               onPress={() => navigation.navigate('Chartkit')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Circle Button Demo"
               onPress={() => navigation.navigate('CircleButtonScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Call Demo"
               onPress={() => navigation.navigate('CallScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Circular Picker Demo"
               onPress={() => navigation.navigate('CircularPickerScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Calculator Demo"
               onPress={() => navigation.navigate('CalculatorScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Camera"
               onPress={() => navigation.navigate('Camera')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Call Logs"
               onPress={() => navigation.navigate('CallLogs')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Contacts"
               onPress={() => navigation.navigate('Contacts')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Camera Demo"
               onPress={() => navigation.navigate('CameraScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="ContactList Demo"
               onPress={() => navigation.navigate('ContactListScreen')}
            />

            <View style={{ height: 20 }}></View>
            <Button
               title="CallDetection Demo"
               onPress={() => navigation.navigate('CallDetectionScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="ContactLog Demo"
               onPress={() => navigation.navigate('ContactListScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="CurrencySymbols Demo"
               onPress={() => navigation.navigate('CurrencySymbolsScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="DatePicker"
               onPress={() => navigation.navigate('DatePicker')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Go to DeviceInfo"
               onPress={() => navigation.navigate('DeviceInfo')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Download Image Demo"
               onPress={() => navigation.navigate('DownloadScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="ExpandableList"
               onPress={() => navigation.navigate('ExpandableList')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="FlatList"
               onPress={() => navigation.navigate('FlatList')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Factorial Demo"
               onPress={() => navigation.navigate('FactorialScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Factorial"
               onPress={() => navigation.navigate('Factorial')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="FibonnaciSeries"
               onPress={() => navigation.navigate('FibonnaciSeries')}
            />
            <View style={{ height: 20 }}></View>

            <Button
               title="Geo Location"
               onPress={() => navigation.navigate('GeoLocation')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Google Playstore Demo"
               onPress={() => navigation.navigate('GooglePlaystoreScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="GestureScreen Demo"
               onPress={() => navigation.navigate('GestureScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Google Login Demo"
               onPress={() => navigation.navigate('GoogleLoginScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="HorizontalScroll"
               onPress={() => navigation.navigate('HorizontalScroll')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Image Gallery"
               onPress={() => navigation.navigate('ImageGallery')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Js BasicTask"
               onPress={() => navigation.navigate('JsBasicTask')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="JavaScript Practice"
               onPress={() => navigation.navigate('JsPracticeScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Localization"
               onPress={() => navigation.navigate('Localization')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Loading Demo"
               onPress={() => navigation.navigate('Loading')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Modal Demo"
               onPress={() => navigation.navigate('Modal')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Multiple Select Demo"
               onPress={() => navigation.navigate('MultipleSelectScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Multi Language Demo"
               onPress={() => navigation.navigate('MultiLanguageScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Number Printing Demo"
               onPress={() => navigation.navigate('NumberPrintingScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Net info Demo"
               onPress={() => navigation.navigate('NetinfoScreen')}
            />

            <View style={{ height: 20 }}></View>
            <Button
               title="Print Number"
               onPress={() => navigation.navigate('PrintNumber')}
            />
            <View style={{ height: 20 }}></View>

            <Button
               title="Pressable Screen Demo"
               onPress={() => navigation.navigate('PressableScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="QRCode Generator Demo"
               onPress={() => navigation.navigate('QRCodeGeneratorScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="QrCode Scanner Demo"
               onPress={() => navigation.navigate('QrCodeScannerScreen')}
            />

            <View style={{ height: 20 }}></View>
            <Button
               title="Rotate Image View"
               onPress={() => navigation.navigate('RotateImageViewScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Switch"
               onPress={() => navigation.navigate('Switch')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Simple Calculator"
               onPress={() => navigation.navigate('SimpleCalculator')}
            />
            <View style={{ height: 20 }}></View>

            <Button
               title="Sql Lite"
               onPress={() => navigation.navigate('SqlLite')}
            />

            <View style={{ height: 20 }}></View>

            <Button
               title="Stopwatch Timer Demo"
               onPress={() => navigation.navigate('StopwatchTimer')}
            />

            <View style={{ height: 20 }}></View>

            <Button
               title="SMS Demo"
               onPress={() => navigation.navigate('smsScreen')}
            />
            <View style={{ height: 20 }}></View>

            <Button
               title="Shapes Screen Demo"
               onPress={() => navigation.navigate('ShapesScreen')}
            />

            <View style={{ height: 20 }}></View>
            <Button
               title="Speedometer Demo"
               onPress={() => navigation.navigate('SpeedometerScreen')}
            />

            <View style={{ height: 20 }}></View>
            <Button
               title="Screen Shot Demo"
               onPress={() => navigation.navigate('ScreenShotScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="SegmentedControl Tabs Demo"
               onPress={() => navigation.navigate('SegmentedControlTabsScreen')}
            />

            {/* <View style={{ height: 20 }}></View>
            <Button
               title="CircularAction Menu Demo"
               onPress={() => navigation.navigate('CircularActionMenuScreen')}
            /> */}

            {/* <View style={{ height: 20 }}></View>
            <Button
               title="CheckboxScreen Demo"
               onPress={() => navigation.navigate('CheckboxScreen')}
            /> */}

            <View style={{ height: 20 }}></View>
            <Button
               title="Searchable Dropdown Demo"
               onPress={() => navigation.navigate('SearchableDropdownScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="State Demo"
               onPress={() => navigation.navigate('StateDemoScreen')}
            />

            <View style={{ height: 20 }}></View>
            <Button
               title="Treeview Demo"
               onPress={() => navigation.navigate('TreeviewScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Tool Tip"
               onPress={() => navigation.navigate('ToolTip')}
            />
            <View style={{ height: 20 }}></View>

            <Button
               title="TextInput"
               onPress={() => navigation.navigate('TextInput')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="UploadFile Demo"
               onPress={() => navigation.navigate('UploadFileScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Unique DeviceId Demo"
               onPress={() => navigation.navigate('UniqueDeviceIdScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Video Demo"
               onPress={() => navigation.navigate('VideoScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Webview 1 Time Loader Demo"
               onPress={() => navigation.navigate('Webview1TimeLoaderScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Webview All Time Loader Demo"
               onPress={() => navigation.navigate('WebviewAllTimeLoaderScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Webview Demo"
               onPress={() => navigation.navigate('WebviewScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Watsapp Message Demo"
               onPress={() => navigation.navigate('WatsappMessageScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="ZoomEffect Demo"
               onPress={() => navigation.navigate('ZoomEffectScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title="Zoom Image Demo"
               onPress={() => navigation.navigate('ZoomImageScreen')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title=" DeviceInfo"
               onPress={() => navigation.navigate('DeviceInfo')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title=" Snap Carousel"
               onPress={() => navigation.navigate('SnapCarousel')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title=" Reanimated"
               onPress={() => navigation.navigate('Reanimated')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title=" Currency Converter"
               onPress={() => navigation.navigate('CurrencyConverter')}
            />
            <View style={{ height: 20 }}></View>


            <Button
               title=" Form Animation"
               onPress={() => navigation.navigate('FormAnimation')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title=" File Upload"
               onPress={() => navigation.navigate('FileUpload')}
            />
            <View style={{ height: 20 }}></View>
            <Button
               title=" Image Upload"
               onPress={() => navigation.navigate('ImageUpload')}
            />
            <View style={{ height: 20 }}></View>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      padding: 20
   }

});

export default HomeScreen;