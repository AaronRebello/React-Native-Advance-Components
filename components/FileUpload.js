
import React from 'react';
import { View, Text, Button } from 'react-native';
import RNFS from 'react-native-fs';   

const FileUpload = () => {

   const uploadFile = () => {
      const uploadUrl = '';

      const files = [
         {
            name: 'resume',
            filename: 'resume.pdf',
            filepath: RNFS.DownloadDirectoryPath + '/resume.pdf',
            filetype: 'pdf'
         },
      ];

      const uploadBegin = (response) => {
         const jobId = response.jobId;
         console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
      };

      const uploadProgress = (response) => {
         const percentage = Math.floor((response.totalBytesSent / response.totalBytesExpectedToSend) * 100);
         console.log('UPLOAD IS ' + percentage + '% DONE!');
      };

      RNFS.uploadFiles({
         toUrl: uploadUrl,
         files: files,
         method: 'POST',
         headers: {
            'Accept': 'application/json',
         },
         fields: {
            'hello': 'world',
         },
         begin: uploadBegin,
         progress: uploadProgress
      }).promise.then((response) => {
         if (response.statusCode == 200) {
            console.log('FILES UPLOADED!');
         } else {
            console.log('SERVER ERROR');
         }
      })
         .catch((err) => {
            if (err.description === "cancelled") {
               console.log('cancelled by user');
            }
            console.log(err);
         });
   }

   return (
      <View>
         <Text>FileUpload</Text>
         <Button
            title="Upload File"
            onPress={() => uploadFile()}
         />
      </View>
   );
}

export default FileUpload;