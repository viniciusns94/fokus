import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={myStyle.container}>
      <Image source={require("./pomodoro.png")}/>
      <View style={myStyle.actions}>
        <Text style={myStyle.myTimer}>
          25:00
        </Text>
          <Pressable style={myStyle.button}>
            <Text style={myStyle.buttonText}>
              Começar
            </Text>
          </Pressable>
      </View>
      <View style={myStyle.footer}>
        <Text style={myStyle.footerText}>
          Projeto aprendizado de 
        </Text>
        <Text style={myStyle.footerText}>
          Vinicius Nogueira
        </Text>
      </View>
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
      borderColor: "#144480",
      gap: 32
  },
  myTimer : {
    fontSize: 54,
    color:'#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button:{
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  },
  buttonText:{
    textAlign: 'center',
    color: '#021123',
    fontSize: 18     
  },
  footer:{
    width: '80%'
  },
  footerText:{
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5    
  }
});
