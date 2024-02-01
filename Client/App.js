import { StyleSheet, Text, View } from "react-native";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TermsCondition from "./pages/terms_and_policy/TermsCondition";
import PrivacyPolicy from "./pages/terms_and_policy/PrivacyPolicy";
import TabNavigator from "./components/tab/TabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#43CA7D" },
      }}
    >
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="tab"
        component={TabNavigator}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen name="Terms and Condition" component={TermsCondition} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      {/* <SafeAreaProvider> */}
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      {/* </SafeAreaProvider> */}
    </>
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
StyleSheet;
