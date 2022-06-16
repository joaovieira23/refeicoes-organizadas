import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Rubik-LightItalic': require('./src/assets/fonts/Rubik-LightItalic.ttf'),
    'Rubik-BoldItalic': require('./src/assets/fonts/Rubik-BoldItalic.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontFamily: 'Rubik-LightItalic', color: 'yellow' }}>Refeições Organizadas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
