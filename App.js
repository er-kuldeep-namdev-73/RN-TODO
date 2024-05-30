import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function handleAddGoal(enterText) {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
    // console.log(courseGoal);
  }

  function handleDelete(id) {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="dark"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalVisible}
          onAddGoal={handleAddGoal}
          onEndGoal={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            alwaysBounceVertical={false}
            renderItem={(item) => {
              // // item.index
              return (
                <GoalItem
                  text={item.item.text}
                  id={item.item.id}
                  onDeleteItem={handleDelete}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  testList: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
