import { StyleSheet, Text, View } from "react-native";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TermsCondition from "./pages/terms_and_policy/TermsCondition";
import PrivacyPolicy from "./pages/terms_and_policy/PrivacyPolicy";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="termsCondition" component={TermsCondition} />
        <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});
StyleSheet