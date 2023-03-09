import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Maintenance from "../../components/Maintenance";

export default function account() {
  return (
    <View style={styles.container}>
      <Maintenance />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
