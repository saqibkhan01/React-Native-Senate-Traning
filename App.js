import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/FirstScreen';
import StackNavigation from './src/Navigation/StackNavigation';
import { AuthProvider } from './src/Context/AuthContext';

export default function App() {
  return (
  <AuthProvider>
    <StackNavigation />
  </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
