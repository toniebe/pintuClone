import { Image, Platform, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../Themed";
import { SvgFromUri, SvgUri } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

const CardMarket = ({
  uri = "https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg",
  imageColor = "#ffffff",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {Platform.OS === "web" ? (
          <Image
            source={{ uri: uri }}
            style={{ width: 40, height: 40, tintColor: imageColor }}
          />
        ) : (
          <SvgUri
            uri={uri}
            width={40}
            height={40}
            fill={"#0069e6"}
            color={"#0069e6"}
            // color={imageColor}
          />
        )}
      </View>
      <View style={[styles.contentContainer, { marginLeft: 10 }]}>
        <Text style={styles.textBold}>Bitcoin</Text>
        <Text style={{ marginTop: 5 }}>BTC</Text>
      </View>
      <View
        style={[styles.contentContainer, { flex: 1, alignItems: "flex-end" }]}
      >
        <Text style={styles.textBold}>Rp. 355.492.550</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <AntDesign name="caretup" size={18} color="#2d9062" />
          <Text>1,77 %</Text>
        </View>
      </View>
    </View>
  );
};

export default CardMarket;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "khaki",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingVertical: 10,
  },
  textBold: {
    fontWeight: "700",
    fontSize: 18,
  },
});
