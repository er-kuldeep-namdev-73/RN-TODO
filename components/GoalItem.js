import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable android_ripple={{color:'#210644'}} onPress={props.onDeleteItem.bind(this, props.id)}
    style={ ({pressed})=> pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text key={props.id} style={styles.goalText}>
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    // color: "white",

},
pressedItem:{
    opacity:0.5
},
goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
