import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export default function Signup({ navigation }) {
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState();
  const [mail, onChangeMail] = useState();
  const [password, onChangePassword] = useState();

  return (
    <View style={styles.page}>
      <View style={styles.box}>
        <Text style={styles.head}>Sign up your account</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Full name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Phone Number"
        />
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
        />

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#43CA7D" : "#11624F",
            },
            styles.button,
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.text}>Sign up</Text>
        </Pressable>
        <Text style={styles.content}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("login")}>
          <Text style={styles.login}>Login</Text>
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
