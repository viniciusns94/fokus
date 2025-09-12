import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={my_styles.container}>
      <Text style={my_styles.text}>Edit app/index.jsx to edit this screen!!</Text>
    </View>
  );
}

const my_styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
  },
  text: {
    color: "#FFF",
  },
});
