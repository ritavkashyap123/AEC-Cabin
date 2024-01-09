import { StyleSheet, Text, View } from "react-native";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TermsCondition from "./pages/terms_and_policy/TermsCondition";
import PrivacyPolicy from "./pages/terms_and_policy/PrivacyPolicy";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Cart} />
        <Stack.Screen name="Cart" component={Menu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Terms and Condition" component={TermsCondition} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// screenOptions={{ animation: 'none' }}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});
StyleSheet