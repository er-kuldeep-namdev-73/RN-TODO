import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  //   const [enterText, setEnterText] = useState("");

  const [enterText, setEnterText] = useState("");

  function handleInput(e) {
    setEnterText(e);
  }

  function handleAddGoal() {
    props.onAddGoal(enterText);
    setEnterText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/icon.png')} style={styles.image}/>
        <TextInput
          placeholder="Your Course Goal!"
          style={styles.textInput}
          onChangeText={handleInput}
          value={enterText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onEndGoal}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    padding:16,
    backgroundColor:'#5e0acc',
    
    
},
textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "95%",
    marginRight: 8,
    padding: 10,
    color:'#120438',
    borderRadius:6
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent:'space-between'
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    marginVertical:8
  },
  image:{
    width:100,
    height:100,
    margin:20,
    backgroundColor:'black'
  }
});

export default GoalInput;
