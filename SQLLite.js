import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, PermissionsAndroid, Platform, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from "react-native-loading-spinner-overlay";
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'training.db' });
export default class SQLLiteDB extends React.Component {
  state = {
    UserName: "",
    password: "",
    spinnerLoading: false,
    userList: [],
    selectedItem: null,
  }
  componentDidMount() {
    this.GetData();
  }

  deleteData = (name) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM User where name =' + name, null,
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            console.log('User data deleted successfully.');
          }
        })
    })
  }

  insertData = (name) => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO User (name) values ("' + name + '")',
        null, (txObj, resultSet) => {
          console.log("New Record ID: " + resultSet.insertId)
        }
        , (txObj, error) => console.log('Error', error))
    })
  }

  createTables = () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS User (ID INTEGER PRIMARY KEY AUTOINCREMENT ,name TEXT)')
      })
    }
    catch (ex) {
      console.log('Table Creation Error: ' + ex);
    }
  }

  CheckAccess = async () => {
    await this.CheckCameraAccess();
    await this.CheckCoarseLocationAccess();
    await this.CheckStorageAccess();
    await this.CheckAudioRecordAccess();
  };

  CheckCameraAccess = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permissions for camera access',
            message: 'Give permission to your camera to scan the QR code',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the storage');
        } else {
          console.log('permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  };

  CheckCoarseLocationAccess = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Permissions for location access',
          message: 'Give permission to your location to scan the bluetooth devices',
          buttonPositive: 'ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('permission denied');
        return;
      }
    }
  };

  CheckStorageAccess = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Permissions for write access',
            message: 'Give permission to your storage to write a audio file',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the storage');
        } else {
          console.log('permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  CheckAudioRecordAccess = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Permissions for audio record access',
            message: 'Give permission to your storage to write a audio file',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  Insert = () => {
    //this.CheckAccess();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todaydate = dd + '/' + mm + '/' + yyyy;

    this.createTables();
    this.setState({ spinnerLoading: true, });
    this.insertData(this.state.name)
    this.GetData();
    this.setState({ spinnerLoading: false, });
  };

  GetData() {
    var data = [];
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM User', null, (txObj, resultSet) => {
        if (resultSet.rows.length > 0) {
          for (var i = 0; i < resultSet.rows.length; i++) {
            console.log('selvan')
            var dict = {};
            dict['id'] = resultSet.rows.item(i).ID;
            dict['name'] = resultSet.rows.item(i).name;
            data.push(dict);
            console.log(data)
          }
          this.setState({ userList: data })
        }
        else {
          this.setState({ spinnerLoading: false, });
        }
      }
        , (txObj, error) => {
          console.log('Update Error ', error)
          this.setState({ spinnerLoading: false, });
        }
      ) // end executeSQL
      //this.setState({ userList: data })
    });
  }

  onPressHandler(id) {
    this.setState({ selectedItem: id });
  }

  deleteData = () => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM User', null,
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            console.log('User data deleted successfully.');
          }
        })
    })
    db.transaction(tx => {
      tx.executeSql('delete from sqlite_sequence where name="User"', null,
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            console.log('ID resetted successfully.');
          }
        })
    })
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
              <Text style={styles.headerstyle}>SQL Lite</Text>
            </LinearGradient>
          </View>
        </SafeAreaView>
        <View style={{ flexDirection: 'row', paddingTop: 30 }}>
          <View style={styles.emptyspace}>
          </View>
          <View style={{ flexDirection: 'column', width: '80%' }}>
            <View style={styles.inputView} >
              <TextInput style={styles.inputText} placeholder="Name" placeholderTextColor="#003f5c" onChangeText={text => this.setState({ name: text })} />
            </View>
          </View>
          <View style={styles.emptyspace}>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', width: '50%', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.loginBtn} onPress={() => this.Insert()}>
                <Text style={styles.loginText}>Insert</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'column', width: '50%', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.loginBtn} onPress={() => this.deleteData()}>
                <Text style={styles.loginText}>Delete All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            extraData={this.state.selectedItem} //Must implemented
            keyExtractor={item => item.id.toString()}
            data={this.state.userList}
            renderItem={({ item }) =>
            (<TouchableOpacity>
              <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#25ABFF' }}>
                <View style={{ flexDirection: 'column', width: '90%' }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'column', width: '10%', alignItems: 'center', }}>
                  {
                    this.state.selectedItem === item.id ?
                      <Icon name='checkmark' style={{ color: "green" }} size={25}></Icon>
                      : null
                  }
                </View>
              </View>
            </TouchableOpacity>)
            }
          />
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
    width: "60%",
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