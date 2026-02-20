import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export const ButtonComponent = ({ onPress }) => {
  return (
    <View style={styles.mainButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SEE DETAILS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainButtonContainer: {
    alignItems: "flex-start",
    marginTop: 8,
  },
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#96ceb4",
    backgroundColor: "#cce6cc",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#333",
  },
});
