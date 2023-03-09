import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Maintenance from "../../components/Maintenance";

const discover = () => {
  return (
    <View style={styles.container}>
      <Maintenance />
    </View>
  );
};

export default discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
