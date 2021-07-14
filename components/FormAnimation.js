
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import Style from '../StyleSheet/Style'

import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker'



const FormAnimation = () => {

   const [activeView, setActiveView] = useState(true);
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [emailInput, setEmailInput] = useState('');
   const [phoneInput, setPhoneInput] = useState('');
   const [date, setDate] = useState(new Date())
   const [chooseGender, setChooseGender] = useState('');
   const activeSV = useSharedValue(false);

   const animatedCricle = useAnimatedStyle(() => {
      return {
         backgroundColor: withTiming(
            activeSV.value ? COLORS.active : COLORS.inactive,
            {
               duration: 100
            }
         ),
         opacity: withTiming(
            activeSV.value ? 1 : 1,
            {
               duration: 100
            }
         )
      };
   });

   const animatedLine = useAnimatedStyle(() => {
      return {
         backgroundColor: withTiming(
            activeSV.value ? COLORS.active : COLORS.inactive,
            {
               duration: 100
            }
         ),
         opacity: withTiming(
            activeSV.value ? 1 : 1,
            {
               duration: 100
            }
         )
      };
   });


   return (
      <View style={styles.container}>
         <View style={styles.indicatorContainer}>
            <TouchableOpacity onPress={() => {
               activeSV.value = false
               setActiveView(true);
            }}>
               <View style={[styles.cricle, { backgroundColor: COLORS.active }]}>
                  <Text style={{color:"white",fontWeight:"700"}}>1</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               activeSV.value = true;
               setActiveView(false);
            }}>
               <View style={styles.lineAndCricleContainer}>
                  <Animated.View style={[styles.line, animatedLine]} />
                  <Animated.View style={[styles.cricle, animatedCricle]}>
                  <Text style={{color:"white",fontWeight:"700"}}>2</Text>

                  </Animated.View>
               </View>
            </TouchableOpacity>
         </View>

         <View>
            {
               activeView ? (
                  <View style={styles.formContainer}>
                     <ScrollView>
                        <View>
                           <View>
                              <Text style={Style.text}>Personal Information</Text>
                           </View>
                           <View style={styles.phoneContainer}>
                              <Text style={styles.personalDetailText}>First name</Text>
                              <View style={{ borderRadius: 10, marginVertical: 10, borderWidth: 1, borderColor: "black" }}>
                                 <TextInput
                                    style={styles.input}
                                    placeholder="First name"
                                    value={firstName}
                                    onChangeText={(text) => setFirstName(text)}
                                 />
                              </View>
                              {/* <Button title="Enter" onPress={() => validatPhoneNo(phoneInput)} /> */}
                           </View>
                           <View style={styles.phoneContainer}>
                              <Text style={styles.personalDetailText}>Last Name</Text>
                              <View style={{ borderRadius: 10, marginVertical: 10, borderWidth: 1, borderColor: "black" }}>
                                 <TextInput
                                    style={styles.input}
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChangeText={(text) => setLastName(text)}
                                 />
                              </View>
                              {/* <Button title="Enter" onPress={() => validatPhoneNo(phoneInput)} /> */}
                           </View>
                           <View style={styles.phoneContainer}>
                              <Text style={styles.personalDetailText}>Mobile No.</Text>
                              <View style={{ borderRadius: 10, marginVertical: 10, borderWidth: 1, borderColor: "black" }}>
                                 <TextInput
                                    style={styles.input}
                                    placeholder="Mobile No."
                                    value={phoneInput}
                                    onChangeText={(text) => setPhoneInput(text)}
                                    keyboardType="numeric"
                                    maxLength={10}
                                 />
                              </View>
                              {/* <Button title="Enter" onPress={() => validatPhoneNo(phoneInput)} /> */}
                           </View>
                           <View >
                              <Text style={styles.personalDetailText}>Email</Text>
                              <View style={{ borderRadius: 10, marginVertical: 10, borderWidth: 1, borderColor: "black" }}>
                                 <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    value={emailInput}
                                    onChangeText={(text) => setEmailInput(text)}
                                 />
                              </View>
                              {/* <Button title="Enter" onPress={() => validateEmail(emailInput)} /> */}
                           </View>
                           <View>
                              <Text style={styles.personalDetailText}>Date of Birth</Text>
                              <DatePicker
                                 style={styles.datePickerStyle}
                                 date={date} // Initial date from state
                                 mode="date" // The enum of date, datetime and time
                                 placeholder="select date"
                                 format="DD-MM-YYYY"
                                 confirmBtnText="Confirm"
                                 cancelBtnText="Cancel"
                                 customStyles={{
                                    dateIcon: {
                                       //display: 'none',
                                       position: 'absolute',
                                       left: 0,
                                       top: 4,
                                       marginLeft: 0,
                                    },
                                    dateInput: {
                                       marginLeft: 36,
                                    },
                                 }}
                                 onDateChange={(date) => {
                                    setDate(date);
                                 }}
                              />
                           </View>
                           <Text style={styles.personalDetailText}>Select Gender</Text>
                           <View style={{ borderRadius: 10, marginVertical: 10, borderWidth: 1, borderColor: "black" }}>
                              <Picker
                                 selectedValue={chooseGender}
                                 onValueChange={(itemValue, itemIndex) => {
                                    setChooseGender(itemValue);
                                 }}>
                                 <Picker.Item label="Male" value="Male" />
                                 <Picker.Item label="Female" value="Female" />
                                 <Picker.Item label="Others" value="Others" />
                              </Picker>
                           </View>
                           <View style={Style.textViewStyle}>
                              <TouchableOpacity style={Style.nextButtonStyle} onPress={() => setViewFirstPage(!viewFirstPage)}>
                                 <Text style={Style.nextTextStyle}>Create Account</Text>
                              </TouchableOpacity>
                           </View>
                        </View>
                     </ScrollView>
                  </View>
               ) : (
                  <View style={styles.formContainer}>
                     <View>
                        <Text style={Style.text}>Create your password</Text>
                     </View>
                     <View style={styles.phoneContainer}>
                        <Text style={styles.personalDetailText}>Password</Text>
                        <View style={{ borderRadius: 10, marginVertical: 10, borderWidth: 1, borderColor: "black" }}>
                           <TextInput
                              style={styles.input}
                              placeholder="Password"
                              value={firstName}
                              onChangeText={(text) => setFirstName(text)}
                           />
                        </View>
                        {/* <Button title="Enter" onPress={() => validatPhoneNo(phoneInput)} /> */}
                     </View>
                     <View style={styles.phoneContainer}>
                        <Text style={styles.personalDetailText}>Confirm Password</Text>
                        <View style={{ borderRadius: 10, marginVertical: 10, borderWidth: 1, borderColor: "black" }}>
                           <TextInput
                              style={styles.input}
                              placeholder="Confirm Password"
                              value={lastName}
                              onChangeText={(text) => setLastName(text)}
                           />
                        </View>
                        {/* <Button title="Enter" onPress={() => validatPhoneNo(phoneInput)} /> */}
                     </View>
                     <View style={Style.textViewStyle}>
                        <TouchableOpacity style={Style.nextButtonStyle} onPress={() => setViewFirstPage(!viewFirstPage)}>
                           <Text style={Style.nextTextStyle}>Create Account</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               )
            }
         </View>
      </View>
   );
}

const COLORS = {
   active: '#ffc107',
   inactive: '#cccccc'
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
   },

   indicatorContainer: {
      flexDirection: 'row',
      alignSelf: 'center'
   },

   cricle: {
      marginTop:20,
      width: 25,
      height: 25,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5
   },

   line: {
      marginTop:20,
      width: 70,
      padding: 2.5,
      borderRadius: 10,
      backgroundColor: COLORS.inactive,
   },

   lineAndCricleContainer: {
      flexDirection: 'row',
      alignItems: 'center'
   },

   formContainer: {
      justifyContent: 'center',
      borderRadius: 10,
      padding:25
   },
   emailContainer: {
      marginBottom: 50
   },
   datePickerStyle: {
      width: 300,
      marginTop: 20,
   },
   phoneContainer: {
      marginTop: 15
   },
   personalDetailText: {
      fontWeight: "700"
   }

});

export default FormAnimation;