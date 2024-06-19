import { Image, StyleSheet, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from "../../App"

export default function HomeScreen() {
  return (
    <GestureHandlerRootView >
    <App />
  </GestureHandlerRootView>
  );
}


