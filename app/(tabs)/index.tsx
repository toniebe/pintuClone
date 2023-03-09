import { Image, Platform, StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "../../components/Themed";
import Maintenance from "../../components/Maintenance";

export default function TabOneScreen() {
  return (
    <View style={[styles.container]}>
      <Maintenance />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 100,
    height: 300,
    resizeMode: "contain",
  },
  imageContainer: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
