import React from "react";
import { Text, View } from "react-native";

// const Welcome = (props) => (
//   <View>
//     <Text>Hello {props.name}</Text>
//   </View>
// );

//destructuring
const Welcome = ({ name }) => (
  <View>
    <Text>Hello {name}</Text>
  </View>
);

export default Welcome;
