
import { Alert } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

export const db = openDatabase({ name: 'test.db' }); 

export const createTable = () => {
   try {
      db.transaction(tx => {
         tx.executeSql(
            'CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT ,name TEXT)'
         )
      })
   }
   catch (ex) {
      console.log('Table Creation Error: ' + ex);
   }
}

export const addUser = (name) => {

   const lowercaseName = name.toLowerCase();
   try {
      db.transaction(tx => {
         tx.executeSql(
            `Select * from User where name="${lowercaseName}"`,
            null,
            (txObj, resultSet) => {
               if (resultSet.rows.length === 0) {
                  tx.executeSql(
                     `INSERT INTO User (name) values ("${lowercaseName}")`,
                     null,
                     (txObj, resultSet) => { console.log("Inserted") },
                     (txObj, error) => { console.log("Error while Inserting user", error) }
                  )
               } else {
                  Alert.alert('Alert!!', "Username Already Exist.")
               }
            },
            (txObj, error) => {
               console.log("Error addUser", error);
            }
         )
      })
   }
   catch (ex) {
      console.log('Adding User Error: ' + ex);
   }
}

export const deleteUser = (id) => {
   try {
      db.transaction(tx => {
         tx.executeSql(
            `DELETE FROM User WHERE id="${id}";`,
            null,
            (txObj, resultSet) => {
               console.log(`Deleted User id: ${id}`);
            },
            (txObj, error) => {
               console.log("deleteUser Error", error);
            }
         )
      })
   }
   catch (ex) {
      console.log('Error while deleting user by id: ' + ex);
   }
}


export const updateUser = (id, name) => {
   try {
      const lowercaseName = name.toLowerCase(); 
      db.transaction(tx => {
         tx.executeSql(
            `Select * from User where name="${lowercaseName}"`,
            null,
            (txObj, resultSet) => {
               if (resultSet.rows.length === 0) {
                  tx.executeSql(
                     `UPDATE User SET name="${name}" WHERE id="${id}"`,
                     null,
                     (txObj, resultSet) => {
                        console.log("Updated");
                     },
                     (txObj, error) => {
                        console.log("updateUser Error", error);
                     }
                  )
               } else {
                  Alert.alert('Alert!!', "Username Already Exist.")
               }
            },
            (txObj, error) => {
               console.log("Error updateUser", error); 
            }
         )
      })
   }
   catch (ex) {
      console.log('Error while updating user by id: ' + ex);
   }
}

export const getUser = (id, setter) => {
   try {
      db.transaction(tx => {
         tx.executeSql(
            `Select * FROM User WHERE id="${id}";`,
            null,
            (txObj, resultSet) => {
               if (resultSet.rows.length > 0) {
                  for (let i = 0; i < resultSet.rows.length; i++) {
                     setter?.(resultSet.rows.item(i))
                  }
               }
            },
            (txObj, error) => {
               console.log("deleteUser Error", error);
            }
         )
      })
   }
   catch (ex) {
      console.log('Error while deleting user by id: ' + ex);
   }
}

export const getAllUser = (setter) => {

   const data = [];

   try {
      db.transaction(tx => {
         tx.executeSql(
            'Select * from User',
            null,
            (txObj, resultSet) => {
               if (resultSet.rows.length > 0) {
                  for (let i = 0; i < resultSet.rows.length; i++) {
                     data.push(resultSet.rows.item(i));
                  }
               }
               setter?.(data);
            },
            (txObj, error) => {
               console.log("Error getAllUser", error);
            }
         )
      })
   } catch (error) {
      console.log("Error while Fetching User", error);
   }

}

export const dropUserTable = () => {
   try {
      db.transaction(tx => {
         tx.executeSql(
            'Drop TABLE User',
            null,
            (txObj, resultSet) => { console.log('Droped') },
            (txObj, error) => { console.log('Error dropUserTable', error) }
         )
      })
   }
   catch (ex) {
      console.log('Drop Table Error: ' + ex);
   }
}

export const deleteAllUser = () => {
   try {
      db.transaction(tx => {
         tx.executeSql(
            'DELETE FROM User',
            null,
            (txObj, resultSet) => { console.log('Deleted') },
            (txObj, error) => { console.log('Error DeleteAllUser', error) }
         )
      })
   }
   catch (ex) {
      console.log('Error while Deleting Table Error: ' + ex);
   }
}

export default db;