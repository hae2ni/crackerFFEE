import React, { Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Display2 } from "../../static/text";

export default function ChooseTime() {
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const dayList = days.map((day) => (
    <DayContainer color="#f5f5f5">
      <Text>{day}</Text>
    </DayContainer>
  ));

  return (
    <>
      <HeaderWrapper>{/* <Image source={Headerimg} /> */}</HeaderWrapper>
      <TitleContainer>
        <Display2>알바 시간 정하기</Display2>
      </TitleContainer>
      <Container>{dayList}</Container>
      <TimeSelect />
    </>
  );
}

const TitleContainer = styled.View`
  margin-bottom: 10px;
  margin-top: 52px;
  margin-left: 20px;
`;

const DayContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.color || "blue"};
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  display: flex;
  margin: 5px;
`;

const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`;
const HeaderWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
