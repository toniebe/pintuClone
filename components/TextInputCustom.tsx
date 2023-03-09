import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  useColorScheme,
  View,
} from "react-native";
import React from "react";

interface textinputCustomProps {
  placeholder?: string;
}

const TextInputCustom = ({
  placeholder,
  ...nativeProps
}: textinputCustomProps & TextInputProps) => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <TextInput
        placeholderTextColor={colorScheme === "dark" ? "#090909" : "grey"}
        style={styles.textinputContainer}
        placeholder="search your coin name ..."
        {...nativeProps}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  textinputContainer: {
    backgroundColor: "#ecf0ee",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
