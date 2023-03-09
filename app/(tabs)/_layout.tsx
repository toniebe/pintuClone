import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Image, Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/tabIcon/home.png")}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          headerShown: false,
          title: "discover",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/tabIcon/discover.png")}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="market"
        options={{
          headerShown: false,
          title: "market",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/tabIcon/market.png")}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          headerShown: false,
          title: "Wallet",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/tabIcon/wallet.png")}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
