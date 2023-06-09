import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>One Guard Inspections</Text>
      <Image source={require('./oneguard.png')} />
      <StatusBar style="auto" />
      <Text>Login as Dispatcher</Text>
      <Text>Login as Inspector</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
