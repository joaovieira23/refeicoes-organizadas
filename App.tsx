import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Welcome from './src/screens/Welcome';

export default function App() {
  const [loaded] = useFonts({
    'Rubik-LightItalic': require('./src/assets/fonts/Rubik-LightItalic.ttf'),
    'Rubik-BoldItalic': require('./src/assets/fonts/Rubik-BoldItalic.ttf'),
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <Welcome />
  );
}