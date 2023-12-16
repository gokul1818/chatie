import {initializeApp, getApps, firebase,auth} from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC0rTb5vgHdbpVihGLK1r9MjhcgFNVSCFI',
  projectId: 'chatie-21069',
  storageBucket: 'chatie-21069.appspot.com',
  appId: '1:421850472203:android:d6fcbcc57a612a4b468c0e',
  
};


const app = firebase.initializeApp(firebaseConfig);
export default app;
