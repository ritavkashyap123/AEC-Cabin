import React, { useState } from "react";
import { StyleSheet,TextInput, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function Login({ navigation }) {
  const [mail, onChangeMail] = useState();
  const [password, onChangePassword] = useState();
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.page}>
      <View style={styles.box}>
        <Text style={styles.head}>Login to your account</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMail}
          value={mail}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={hidePass ? true : false}
            // {<Ionicons name="eye" onPress={() => setHidePass(!hidePass)} />}
        />

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#43CA7D" : "#11624F",
            },
            styles.button,
          ]}
          onPress={() => navigation.navigate("tab")}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Text style={styles.content}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("signup")}>
          <Text style={styles.login}>Sign Up</Text>
        </Pressable>
        <View style={styles.terms}>
          <Pressable onPress={() => navigation.navigate("Terms and Condition")}>
            <Text style={{ color: "#888" }}>Terms & Conditions</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Privacy Policy")}>
            <Text style={{ color: "#888" }}>Privacy Policy</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#43CA7D",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  head: {
    fontSize: 20,
    margin: 20,
  },
  input: {
    width: "90%",
    margin: 10,
    height: 40,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderRadius: 10,
  },
  content: {
    fontSize: 15,
    margin: 10,
  },
  login: {
    color: "blue",
    fontWeight: "bold",
  },
  terms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    margin: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.3,
    color: "white",
  },
});
