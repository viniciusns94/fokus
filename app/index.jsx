import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={myStyle.container}>
      <Image source={require("./pomodoro.png")}/>
      <View style={myStyle.actions}/>
    </View>
  );
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  actions : {
      paddingVertical: 24,
      paddingHorizontal: 24,
      backgroundColor: "#14448080",
      width: "80%",
      borderRadius: 32,
      borderWidth: 2,
      borderColor: "#144480"
  }
});
