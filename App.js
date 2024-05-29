import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [enterText, setEnterText] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  function handleInput(e) {
    setEnterText(e);
  }

  function handleAddGoal() {
    setCourseGoal((currentCourseGoals) => [...currentCourseGoals, enterText]);
    console.log(courseGoal);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal!"
          style={styles.textInput}
          onChangeText={handleInput}
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>

      <View style={styles.goalsContainer}>
        <Text style={styles.testList}>List Of Goals...</Text>
        {
          courseGoal.map((goal)=>{
            return (
              <Text key={goal} style={styles.goalItem}>{goal}</Text>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor:''
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  testList: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem:{
    margin: 8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    padding:8,
    color:'white'
  }
});
