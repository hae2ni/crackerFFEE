import { View, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import styled from "styled-components/native";

export default function App() {
  return <HomeScreen />;
}

const Hello = styled.View`
  background-color: red;
`;
