import React from "react";
import Menu from "../../pages/menu/Menu";
import Cart from "../../pages/cart/Cart";
import Profile from "../../pages/profile/Profile";
import Home from "../../pages/home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import AnimatedTabBar, {TabsConfigsType} from "curved-bottom-navigation-bar";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// const TabsConfigsType = {
//   Home: {
//     icon: ({ progress, focused }) => {
//       <Ionicons
//         name="home"
//         color={focused ? "#43CA7D" : "#808080"}
//         size={size}
//       />;
//     } /* Icon Component */,
//     renderTitle: ({ progress, title }) => {} /* Custom reanimated Component */,
//   },
//   Menu: {
//     icon: ({ progress, focused }) => {
//       <Ionicons
//         name="fast-food"
//         color={focused ? "#43CA7D" : "#808080"}
//         size={size}
//       />;
//     } /* Icon Component */,
//     renderTitle: ({ progress, title }) => {} /* Custom reanimated Component */,
//   },
//   Cart: {
//     icon: ({ progress, focused }) => {
//       <Ionicons
//         name="cart"
//         color={focused ? "#43CA7D" : "#808080"}
//         size={size}
//       />;
//     } /* Icon Component */,
//     renderTitle: ({ progress, title }) => {} /* Custom reanimated Component */,
//   },
//   Profile: {
//     icon: ({ progress, focused }) => {
//       <Ionicons
//         name="person"
//         color={focused ? "#43CA7D" : "#808080"}
//         size={size}
//       />;
//     } /* Icon Component */,
//     renderTitle: ({ progress, title }) => {} /* Custom reanimated Component */,
//   },
// };

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#43CA7D" },
      }}
      // tabBar={(props) => <AnimatedTabBar tabs={TabsConfigsType} {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="home" color={focused ? "#43CA7D" : "#808080"} size={size} />
          ),
          tabBarActiveTintColor: "#43CA7D",
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="fast-food" color={focused ? "#43CA7D" : "#808080"} size={size} />
          ),
          tabBarActiveTintColor: "#43CA7D",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="cart" color={focused ? "#43CA7D" : "#808080"} size={size} />
          ),
          tabBarActiveTintColor: "#43CA7D",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="person" color={focused ? "#43CA7D" : "#808080"} size={size} />
          ),
          tabBarActiveTintColor: "#43CA7D",
        }}
      />
    </Tab.Navigator>
  );
}
