import { StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import Constants from "expo-constants";
// import { Text, View } from "../../components/Themed";
import { AppContext } from "../../context/AppContext";
import { getPriceChange } from "../../api/getPriceChange";
import { Text, View } from "../../components/Themed";
import CardMarket from "../../components/CardMarket/CardMarket";

const market = () => {
  const { supportedCurrencies } = useContext(AppContext);

  const fetchChangesData = async () => {
    let response = await getPriceChange();
    // console.log(response);
  };

  useEffect(() => {
    fetchChangesData();
  }, []);

  return (
    <View style={styles.container}>
      
      <CardMarket />
    </View>
  );
};

export default market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
