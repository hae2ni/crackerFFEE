import { View, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import ChooseJob from "./src/screens/OnBoarding/ChooseJob";
import styled from "styled-components/native";
import ChooseMoney from "./src/screens/OnBoarding/ChooseMoney";

export default function App() {
  return <ChooseMoney />;
}

const Hello = styled.View`
  background-color: red;
`;
