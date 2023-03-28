import React from "react-native";
import styled from "styled-components/native";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  Pressable,
} from "react-native";

//const Stack = createStackNavigator();

export default function HomeScreen() {
  return <SignUpbtn />;
}

const SignUpbtn = styled.TouchableOpacity`
  position: "absolute";
  width: 342;
  height: 44;
  left: 24;
  top: 684;
  background-color: #6100ff;
  border-radius: 100;
`;

// const styles = StyleSheet.create({
// 	logo: {
// 		position: "absolute",
// 		width: 160,
// 		height: 30.39,
// 		left: 115,
// 		top: 240,
// 	},
// 	signup: {

// 	},
// });
