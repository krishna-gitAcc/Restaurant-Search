import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ value, setValue, onSubmit }) {
  return (
    <View style={styles.SearchBarStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        style={styles.InputTextStyle}
        placeholder="Search"
        value={value}
        onChangeText={setValue}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBarStyle: {
    backgroundColor: "grey",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
  },
  InputTextStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
