import { FlatList, Platform, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
// import { Text, View } from "../../components/Themed";
import { AppContext } from "../../context/AppContext";
import { getPriceChange } from "../../api/getPriceChange";
import { View } from "../../components/Themed";
import CardMarketMobile from "../../components/CardMarket/CardMarketMobile";
import {
  currenciesProps,
  priceChangesProp,
} from "../../types/supportedCurrencies";
import { FlashList } from "@shopify/flash-list";
import TextInputCustom from "../../components/TextInputCustom";

interface JoinData extends priceChangesProp {
  name?: string;
  logo?: string;
  explorer?: string;
  currencySymbol?: string;
  color?: string;
}

interface renderItemMobileProps {
  item: JoinData;
  index: number;
}

interface Sortable {
  [key: string]: any;
}

const market = () => {
  const { supportedCurrencies } = useContext(AppContext);
  const [mergeData, setMergerData] = useState<JoinData[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterData, setFilterData] = useState<JoinData[]>([]);

  function joinArrays(
    changePrice: priceChangesProp[],
    currencies: currenciesProps[]
  ): JoinData[] {
    return changePrice.map((item) => {
      const currency = currencies.find(
        (c) => c.currencySymbol.toLowerCase() === item.pair.split("/")[0]
      );
      return {
        pair: item.pair,
        latestPrice: item.latestPrice,
        day: item.day,
        week: item.week,
        month: item.month,
        year: item.year,
        currencySymbol: currency?.currencySymbol,
        name: currency?.name,
        logo: currency?.logo,
        explorer: currency?.wallets[0].explorer,
        color: currency?.color,
      };
    });
  }

  function sortByProperty<T extends Sortable>(
    arr: T[],
    prop: keyof T,
    ascending = true
  ): T[] {
    const sortedArray = [...arr];
    sortedArray.sort((a: T, b: T) => {
      if (a[prop] < b[prop]) {
        return ascending ? -1 : 1;
      }
      if (a[prop] > b[prop]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
    return sortedArray;
  }

  const fetchChangesData = async () => {
    let response = await getPriceChange();
    // console.log(response.code, ' + ', Platform.OS);

    if (response.code === "success") {
      const mergedDataExample = joinArrays(
        response.payload,
        supportedCurrencies
      );
      const sortedData = sortByProperty(mergedDataExample, "name", true);

      setMergerData(sortedData);
    }
  };

  const filteredItems = mergeData.filter((item) =>
    item.name?.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    fetchChangesData();
    const intervalId = setInterval(() => {
      fetchChangesData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <TextInputCustom
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        placeholder={"Cari nama blockchain"}
      />
      <FlashList
        estimatedItemSize={200}
        data={filteredItems}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }: renderItemMobileProps) => (
          <CardMarketMobile
            blockChainName={item.name}
            currencySimbol={item.currencySymbol}
            fluctuation={parseInt(item.day) > 0 ? "up" : "down"}
            uri={item.logo as string}
            valueDay={item.day}
            backgroundColor={item.color}
          />
        )}
      />
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
