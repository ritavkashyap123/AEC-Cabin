import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
  },
});
