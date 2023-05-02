import React, { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Display2 } from "../../static/text";
import { useState } from "react";

const JOB_DATA = [
  "카페 베이커리",
  "편의점",
  "레스토랑",
  "학원·과외",
  "배달",
  "물류·포장",
  "공연·전시스탭",
  "기타",
];

export default function ChooseJob() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(-1);
  const [isTouched, setIsTouched] = useState(
    Array(JOB_DATA.length).fill(false)
  );

  const onPressJob = (index) => {
    setIsTouched((prev) => {
      const nextState = [...prev];
      nextState[index] = !prev[index];
      return nextState;
    });
    setSelectedJobIndex(index);
  };

  const jobList = JOB_DATA.map((job, index) => (
    <JobContainer
      key={index}
      onPress={() => {
        onPressJob(index);
      }}
      isTouched={isTouched[index]}
    >
      <JobTouchArea isTouched={isTouched[index]}>{job}</JobTouchArea>
    </JobContainer>
  ));

  return (
    <Container>
      <HeaderWrapper>
        <Image source={Headerimg} />
      </HeaderWrapper>
      <MainContainer>
        <Display2>알바 종류 고르기</Display2>
      </MainContainer>
      <MainContainer />
      <JobListContainer>{jobList}</JobListContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const JobContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isTouched ? "#6100FF" : "#f5f5f5")};
  color: "#858585";
  border-radius: 100px;
  width: 280px;
  height: 48px;
  margin-bottom: 15px;
`;

const JobTouchArea = styled.Text`
  color: ${(props) => (props.isTouched ? "white" : "black")};
`;

const MainContainer = styled.View`
  margin: 20px;
`;

const Headerimg = require("../../assets/onBoarding/Header2.png");
const HeaderWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

const JobListContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
