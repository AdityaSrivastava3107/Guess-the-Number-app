import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton(props) {
  return (
    <>
      <View style={styles.ButtonOuterContainer}>
        <Pressable style={({pressed})=> pressed ? [styles.ButtonInnerContainer, styles.Pressed] : styles.ButtonInnerContainer}>
          <Text style={styles.ButtonContainer}>{props.children}</Text>
        </Pressable>
      </View>
    </>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  ButtonOuterContainer: {
    borderRadius: 28,
    margin: 2,
    overflow: "hidden",
  },
  ButtonInnerContainer: {
    backgroundColor: "#4e0329",
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    borderRadius : 28
  },
  ButtonContainer: {
    color: "white",
    textAlign: "center",
  },
  Pressed: {
    opacity: 0.75,
  },
});
