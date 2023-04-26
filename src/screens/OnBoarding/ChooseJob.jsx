import React, { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Display2 } from "../../static/text";
import { useState } from "react";
import { main } from "../../styles/Color";
import "../../styles/ChooseJob.scss";

export default function ChooseJob() {
  const JOB_DATA = ["카페", "ㅇ", "ㅇㄴ", "ㄴㅇㄹ"];
  const [btnActive, setBtnActive] = useState(
    Array(JOB_DATA.length).fill(false)
  );

  // const JOB_DATA = [
  //   { name: "카페 베이커리", id: 0 },
  //   { name: "편의점", id: 1 },
  //   { name: "레스토랑", id: 2 },
  //   { name: "학원·과외", id: 3 },
  //   { name: "배달", id: 4 },
  //   { name: "물류·포장", id: 5 },
  //   { name: "공연·전시스탭", id: 6 },
  //   { name: "기타", id: 7 },
  // ];
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  const jobList = JOB_DATA.map((job, idx) => (
    <JobContainer
      className={"btn" + (idx == btnActive ? "active" : "")}
      key={idx}
      onPress={() => {
        toggleActive;
      }}
    >
      <Text>{job}</Text>
    </JobContainer>
  ));

  return (
    <Container>
      <HeaderWrapper>
        <Image source={Headerimg} />
      </HeaderWrapper>
      <MainContainer>
        <Display2>알바 종류 고DDDDDD르기</Display2>
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
  background-color: red;
  color: "#858585";
  border-radius: 100px;
  width: 280px;
  height: 48px;
  margin-bottom: 15px;
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
