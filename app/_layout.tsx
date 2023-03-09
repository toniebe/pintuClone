import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { getSupportedCurrencies } from "../api/getSupportedCurrencies";
import AppProvider from "../context/AppProvider";
import { currenciesProps } from "../types/supportedCurrencies";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [supportedCurrencies, setSupportedCurrencies] = useState<
    currenciesProps[]
  >([]);

  const fetchApi = async () => {
    let response = await getSupportedCurrencies();
    // console.log(response);

    if (response.code === "success") {
      setSupportedCurrencies(response.payload);
    } else {
      console.error(response.message);
    }
  };

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  
  useEffect(() => {
    fetchApi();
  },[])
  useEffect(() => {
  
    // console.log(Constants.expoConfig?.extra?.BASE_URL);
    if (error) {
      setLoading(false);
      throw error;
    } else if (loaded && supportedCurrencies.length > 0) {
      setLoading(false);
    }
  }, [error,supportedCurrencies]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {loading && <SplashScreen />}
      {!loading && (
        <AppProvider value={{ supportedCurrencies }}>
          <RootLayoutNav />
        </AppProvider>
      )}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
