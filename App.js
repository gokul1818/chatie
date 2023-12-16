// import React, { useRef, useState } from 'react';  // Import useState
// import { View, Text, TextInput, Button } from 'react-native';  // Import Button
// import WebSocket from 'react-native-websocket';

// const WebSocketExample = () => {
//   const websocketRef = useRef(null);
//   const [inputValue, setInputValue] = useState('');  // Use state for input value

//   const handleOpen = () => {
//     console.log('WebSocket connection opened');
//     // You can send a message when the connection is opened
//     if (websocketRef.current) {
//       websocketRef.current.send(inputValue);
//       setInputValue("")
//     }
//   };

//   const handleClose = (event) => {
//     console.log('WebSocket connection closed:', event.code, event.reason);
//   };

//   const handleMessage = (message) => {
//     console.log('Received message:', message);
//     // Handle incoming messages here
//   };

//   return (
//     <View>
//       <Text>WebSocket Example</Text>
//       <WebSocket
//         url="wss://socketsbay.com/wss/v2/10/470ecdec1d74c40b647906258fd5d738/"
//         onOpen={handleOpen}
//         onClose={handleClose}
//         onData={handleMessage}  // Use onData instead of onMessage
//         ref={websocketRef}
//       />
//       <TextInput
//         value={inputValue}  // Use value instead of onChange
//         onChangeText={(text) => setInputValue(text)}  // Use onChangeText to update input value
//         placeholder="Type a message"
//       />
//       <Button
//         title="Send Message"
//         onPress={handleOpen}  // Trigger handleOpen when the button is pressed
//       />
//       {/* Your component JSX */}
//     </View>
//   );
// };

// export default WebSocketExample;


import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import ChatScreen from './ChatScreen';
import { initializeApp } from '@react-native-firebase/app';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    initializeApp();
  }, []);
  
  useEffect(() => {
    const unsubscribeAuth = auth().onAuthStateChanged((user) => {
      // Handle user authentication state changes
    });

    return unsubscribeAuth;
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen name="Chat" component={ChatScreen} />
      {/* Add other screens as needed */}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
