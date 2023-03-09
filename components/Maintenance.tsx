import { Image, Platform, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Text, View } from "./Themed";
import LottieView from "lottie-react-native";
import { ExternalLink } from "./ExternalLink";
import Colors from "../constants/Colors";

const Maintenance = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      {Platform.OS === "web" ? (
        <View
          style={[
            styles.imageContainer,
            colorScheme === "dark" && { backgroundColor: "#e4e4e4" },
          ]}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/pintu.png")}
          />
        </View>
      ) : (
        <LottieView
          autoPlay
          style={{
            width: 100,
            height: 100,
            backgroundColor: colorScheme === "dark" ? "#e4e4e4" : "#ffffff",
            // paddingHorizontal: 20,
          }}
          source={require("../assets/images/lottie/pintu.json")}
        />
      )}
      <View style={styles.helpContainer}>
        <ExternalLink style={styles.helpLink} href="https://pintu.co.id/">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Halaman ini tersedia langsung di website resmi pintu, silahkan klik
            disini
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
};

export default Maintenance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 300,
    resizeMode: "contain",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
