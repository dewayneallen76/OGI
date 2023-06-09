import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View } from 'react-native';

<Image source={require('larryallen/QA/oneguard.png')} />;

var icon = this.props.active
  ? require('larryallen/QA/oneguard.png')
  : require('larryallen/QA/oneguard.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source= {icon}/>
      <Text>One Guard Inspections</Text>
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
