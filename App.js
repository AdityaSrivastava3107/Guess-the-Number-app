import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#ddb52f", "#72063c"]}
      style={styles.RootContainer}
    >
      <ImageBackground source={require('./assets/Images/Background.png')} resizeMode="contain" style={styles.ImageContainer} imageStyle={styles.ImageStyle}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  RootContainer: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
  ImageContainer : {
    flex: 1,
  }, 
  ImageStyle : {
    marginTop : 70,
    opacity : 0.5
  }
});
