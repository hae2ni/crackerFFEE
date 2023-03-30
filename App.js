import { View, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import ChooseJob from "./src/screens/OnBoarding/ChooseJob";
import styled from "styled-components/native";

export default function App() {
  return <ChooseJob />;
}

const Hello = styled.View`
  background-color: red;
`;
