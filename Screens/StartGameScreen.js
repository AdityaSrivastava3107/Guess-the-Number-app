import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.InputContainer}>
      <TextInput style={styles.TextInputContainer} maxLength={2} keyboardType="number-pad"/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Add</PrimaryButton>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  InputContainer : {
    marginHorizontal : 24,
    padding : 16,
    marginTop : 100,
    backgroundColor : "#72063c",
    borderRadius : 8,
    shadowColor : 'black',
    shadowOffset : {width : 5, height : 5}, 
    shadowRadius : 6,
    shadowOpacity : 0.5
  },
  TextInputContainer : {
    height : 50,
    fontSize : 32,
    borderBottomColor : '#ddb52f',
    borderBottomWidth : 2,
    color : '#ddb52f',
    fontWeight : 'bold',
    marginVertical : 4,
    width : 50,
    height : 50, 
    textAlign : 'center',
  }
})