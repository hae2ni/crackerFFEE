import { View, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import JobNickname from "./src/screens/OnBoarding/JobNickname";
import ChooseJob from "./src/screens/OnBoarding/ChooseJob";
import styled from "styled-components/native";
import ChooseMoney from "./src/screens/OnBoarding/ChooseMoney";
import ChooseTime from "./src/screens/OnBoarding/ChooseTime";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="JobNickname"
          component={JobNickname}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseJob"
          component={ChooseJob}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseTime"
          component={ChooseTime}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseMoney"
          component={ChooseMoney}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
