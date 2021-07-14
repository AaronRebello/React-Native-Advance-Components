import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, PermissionsAndroid, Platform, SafeAreaView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from "react-native-loading-spinner-overlay";
import DatePicker from 'react-native-datepicker'
import axios from "axios";

export default class SampleLogin extends React.Component {
  state = {
    inputValue: "",
    OTP: "",
    insuredDOB: "",
    inputType: "",
    spinnerLoading: false,
    reqId: "",
  }

  ValdateLogin = async () => {
    if (this.state.inputValue == '') {
      alert('Please enter Mobile / Email / Policy Number.');
    }
    else if (this.state.inputValue.includes('@')) {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.inputValue)) {
        this.setState({ inputType: 'EMAIL' });
      }
      else {
        alert("You have entered an invalid email address!")
      }
    }
    else if (isNaN(this.state.inputValue.substring(0, 1))) {
      if (this.state.inputValue.length != 10) {
        alert('Please enter the valid 10 digit policy number');
      }
      else {
        this.setState({ inputType: 'POLICY' });
      }
    }
    else if (isNaN(this.state.inputValue)) {
      alert('Please enter the valid mobile number.')
    }
    else if (this.state.inputValue.length != 10) {
      alert('Please enter the valid 10 digit mobile number');
    }
    else if (this.state.insuredDOB == '') {
      alert('Please select the policy date.');
    }
    else {
      if (this.state.inputType == '') {
        this.setState({ inputType: 'MOBILE' });
      }
      this.setState({ spinnerLoading: true });
      
      var FormData = require('form-data');
      var data = new FormData();

      data.append('data', '{"requestJson": {');
      data.append('"inputType":"' + this.state.inputType + '",');
      data.append('"inputValue":"' + this.state.inputValue + '",');
      data.append('"insuredDOB":"' + this.state.insuredDOB + '",');
      data.append('"token":{"inputType":"' + this.state.inputType + '",');
      data.append('"inputValue":"' + this.state.inputValue + '",');
      data.append('"insuredDOB":"' + this.state.insuredDOB + '"}}');
      //data.append('data', '{\n    "requestJson": {\n    "inputType":"MOBILE",\n\t"inputValue":"9833415608",\n\t"insuredDOB":"31-JAN-2006"\n},\n    "token":{\n   "inputType":"MOBILE",\n\t"inputValue":"9833415608",\n\t"insuredDOB":"31-JAN-2006"\n    }\n}');

      var config = {
        method: 'post',
        url: 'http://104.211.186.16:4503/content/tataaialifeinsurancecompanylimited/api/sendOtp.json',
        data: data
      };
      var self = this;
      axios(config)
        .then(function (response) {
          alert('OTP sent to the registered mobile numnber and email address.')
          console.log(JSON.stringify(response.data));
          self.setState({ spinnerLoading: false, reqId: response.data.reqId });
        })
        .catch(function (error) {
          self.setState({ spinnerLoading: false });
          alert('Error while validating the login.');
          console.log(error);
        });
    }
  }

  ValdateOTP = async () => {
    if (this.state.OTP == '') {
      alert('Please enter the OTP.');
    }
    else if (isNaN(this.state.OTP)) {
      alert("Please enter numeric value for OTP");
    }
    else {
      this.setState({ spinnerLoading: true });

      var FormData = require('form-data');

      var data = new FormData();

      data.append("data", '{"requestJson": {');
      data.append('"inputType":"' + this.state.inputType + '",');
      data.append('"inputValue":"' + this.state.inputValue + '",');
      data.append('"insuredDOB":"' + this.state.insuredDOB + '",');
      data.append('"reqId" : "' + this.state.reqId + '",');
      data.append('"otp" : "' + this.state.OTP + '"},');
      data.append('"token":{');
      data.append('"inputType":"' + this.state.inputType + '",');
      data.append('"inputValue":"' + this.state.inputValue + '",');
      data.append('"insuredDOB":"' + this.state.insuredDOB + '",');
      data.append('"reqId" : "' + this.state.reqId + '",');
      data.append('"otp" : "' + this.state.OTP + '"');
      data.append('}}');

      var config = {
        method: 'post',
        url: 'http://stage.tataaia.com/content/tataaialifeinsurancecompanylimited/api/getjwtToken.json',
        data: data
      };
      var self = this;
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          self.setState({ spinnerLoading: false, jwtToken: response.data.jwtToken });
          alert('Login success.')
        })
        .catch(function (error) {
          self.setState({ spinnerLoading: false });
          console.log(error);
          alert('Error while validating the OTP.');
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinnerLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle} />
        <SafeAreaView>
          <View style={styles.headercolor}>
            <LinearGradient colors={['#25A3FF', '#0AD0FF']}>
              <Text style={styles.headerstyle}>Login</Text>
            </LinearGradient>
          </View>
        </SafeAreaView>
        <View style={{ flexDirection: 'row', paddingTop: 30 }}>
          <View style={styles.emptyspace}>
          </View>
          <View style={{ flexDirection: 'column', width: '80%' }}>
            <View style={styles.inputView} >
              <TextInput style={styles.inputText} placeholder="Mobile / Email / Policy No" placeholderTextColor="#003f5c" onChangeText={text => this.setState({ inputValue: text })} />
            </View>
          </View>
          <View style={styles.emptyspace}>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <DatePicker
            style={{ width: '90%' }}
            date={this.state.insuredDOB}
            mode="date"
            placeholder="Select Policy Date"
            format="DD-MMM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                right: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ insuredDOB: date }) }}
          />
        </View>
        <View style={{ height: 5 }}></View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.emptyspace}>
          </View>
          <View style={{ flexDirection: 'column', width: '80%', alignItems: 'center' }}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => this.ValdateLogin()}>
              <Text style={styles.loginText}>Send OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.emptyspace}>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 30 }}>
          <View style={styles.emptyspace}>
          </View>
          <View style={{ flexDirection: 'column', width: '60%' }}>
            <View style={styles.inputView} >
              <TextInput style={styles.inputText} placeholder="Enter the OTP" placeholderTextColor="#003f5c" onChangeText={text => this.setState({ OTP: text })} keyboardType='numeric' />
            </View>
          </View>
          <View style={{ flexDirection: 'column', width: '2%' }}>
          </View>
          <View style={{ flexDirection: 'column', width: '60%' }}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => this.ValdateOTP()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.emptyspace}>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "100%",
    backgroundColor: "#D5D5D5",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  forgot: {
    color: "red",
    fontSize: 15
  },
  loginBtn: {
    width: "30%",
    backgroundColor: "#25A3FF",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headercolor:
  {
    height: 65,
    width: '100%'
  },
  helptext: {
    color: "#0AA1FF",
    fontSize: 18,
    textAlign: 'right',
  },
  helptext1: {
    fontSize: 18,
    textAlign: 'left',
  },
  login: {
    fontSize: 40,
    textDecorationLine: "underline",
    lineHeight: 50,
  },
  loginText: {
    color: "white"
  },
  spinnerTextStyle: {
    color: '#FFFFFF',
  },
  headerTitleStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap-reverse',
    color: "white",
    width: 500
  },
  headerstyle: {
    fontSize: 20,
    height: 50,
    paddingLeft: 15,
    paddingTop: 10,
    fontWeight: 'bold'
  },
  emptyspace: {
    flexDirection: 'column',
    width: '10%',
  },
  boxstyle: {
    flexDirection: 'column',
    width: '80%',
  },

});