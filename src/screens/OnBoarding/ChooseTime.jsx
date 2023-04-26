import React, { Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Display2 } from "../../static/text";
import { useState } from "react";
import { main } from "../../styles/Color";

export default function ChooseTime() {
  const [isTouched, setIsTouched] = useState(false);
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const onPress = () => {
    setIsTouched((prev) => !prev);
  };

  const daysList = days.map((day, index) => (
    <Days key={index} isTouched={isTouched} onPress={onPress}>
      <DayContainer>{day}</DayContainer>
    </Days>
  ));

  return (
    <Container>
      <HeaderWrapper>
        <Image source={Headerimg} />
      </HeaderWrapper>
      <MainContainer>
        <Display2>알바 시간 정하기</Display2>
        <MainContainer />
        <DayListContainer>{daysList}</DayListContainer>
      </MainContainer>
    </Container>
  );
}

const Days = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: ${(props) => (props.isTouched ? "#6100FF" : "#f5f5f5")};
`;

const DayContainer = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
`;

const DayListContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const MainContainer = styled.View`
  margin: 20px;
`;

const Headerimg = require("../../assets/onBoarding/Header3.png");
const HeaderWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  margin-bottom: 48px;
`;
