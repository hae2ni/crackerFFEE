import { View, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import JobNickname from "./src/screens/OnBoarding/JobNickname";
import ChooseJob from "./src/screens/OnBoarding/ChooseJob";
import styled from "styled-components/native";
import ChooseMoney from "./src/screens/OnBoarding/ChooseMoney";
import ChooseTime from "./src/screens/OnBoarding/ChooseTime";
import { GlobalStyle } from "./src/styles/Global";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <NavigationContainer>
      <GlobalStyle />
      <Stack.Navigator initialRouteName="onBoarding">
        <Stack.Screen name="JobNickname" component={JobNickname} />
        <Stack.Screen name="ChooseJob" component={ChooseJob} />
        <Stack.Screen name="ChooseTime" component={ChooseTime} />
        <Stack.Screen name="ChooseMoney" component={ChooseMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
