import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.TextInputContainer}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.ButtonStyle}>
        <View style = {styles.SingleButton}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style = {styles.SingleButton}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  InputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#72063c",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  TextInputContainer: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    marginVertical: 4,
    width: 50,
    height: 50,
    textAlign: "center",
  },
  ButtonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  SingleButton : {
    flex : 1
  }
});
