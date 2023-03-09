import {
  Image,
  Platform,
  StyleSheet,
  useColorScheme,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "../Themed";
import { Svg, SvgFromUri, SvgUri, SvgXml } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import {
  blackColor,
  greenPrimary,
  redPrimary,
  whiteColor,
} from "../../constants/Colors";

interface CardMarketMobileProps {
  uri: string;
  currencySimbol?: string;
  blockChainName?: string;
  fluctuation: string;
  valueDay: string;
  backgroundColor?: string;
}

const CardMarketMobile = ({
  uri,
  currencySimbol,
  blockChainName,
  fluctuation,
  valueDay,
  backgroundColor = greenPrimary,
}: CardMarketMobileProps) => {
  const [imgXml, setImgXml] = useState("<svg></svg>");
  const getImgXml = async () => {
    const url = (await uri) as string;
    const xml = await (await fetch(url)).text();
    setImgXml(xml);
  };

  const [colorAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    getImgXml();
  }, []);

  useEffect(() => {
    Animated.loop(
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(colorAnimation, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }),
    ])
    ).start();
  }, [fluctuation]);

  const colorScheme = useColorScheme();

  const textColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      colorScheme === "dark" ? whiteColor : blackColor,
      fluctuation === "up" ? greenPrimary : redPrimary,
    ],
  });

  // const fillSvg = colorScheme === 'dark' ?

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{ backgroundColor: backgroundColor, borderRadius: 50 }}>
          {Platform.OS === "web" ? (
            <Image source={{ uri: uri }} style={{ width: 40, height: 40 }} />
          ) : (
            //   <SvgXml
            //     xml={imgXml.replace(
            //       /fill=(["'])(?:(?=(\\?))\2.)*?\1/g,
            //       `fill="${whiteColor}"`
            //     )}
            //     width={40}
            //     height={40}
            //   />
            <SvgUri
              uri={uri}
              width={40}
              height={40}
              fill={colorScheme === "dark" ? whiteColor : blackColor}
              color={'#eeeeff'}
            />
          )}
        </View>
      </View>
      <View style={[styles.contentContainer, { flex: 1, marginLeft: 10 }]}>
        <Text style={styles.textBold}>{blockChainName}</Text>
        <Text style={{ marginTop: 5 }}>{currencySimbol}</Text>
      </View>
      <View style={[styles.contentContainer, { alignItems: "flex-end" }]}>
        <Animated.Text style={[styles.textBold, { color: textColor }]}>
          Rp. 355.492.550
        </Animated.Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          {fluctuation === "up" ? (
            <>
              <AntDesign name="caretup" size={18} color={greenPrimary} />
              <Text style={{ color: greenPrimary }}>{valueDay} %</Text>
            </>
          ) : (
            <>
              <AntDesign name="caretdown" size={18} color={redPrimary} />
              <Text style={{ color: redPrimary }}>{valueDay} %</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default CardMarketMobile;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "khaki",
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
