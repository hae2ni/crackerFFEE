import React, { View, Text, Image } from "react-native";
import styled from "styled-components";

export default function ChooseJob() {
  const jobs = [
    "카페 베이커리",
    "편의점",
    "레스토랑",
    "학원·과외",
    "배달",
    "물류·포장",
    "공연·전시스탭",
    "기타",
  ];

  const jobList = jobs.map((job) => (
    <Container>
      <JobContainer>
        <Text>{job}</Text>
      </JobContainer>
    </Container>
  ));
  return (
    <Wrapper>
      <HeaderWrapper>
        <Image source={Headerimg} />
      </HeaderWrapper>
      <TitleContainer>
        {/* <Display2>알바 종류 고르기</Display2> */}
      </TitleContainer>
      {jobList}
    </Wrapper>
  );
}

const JobContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  color: "858585";
  border-radius: 100px;
  width: 280px;
  height: 48px;
  margin-bottom: 12px;
  /* font-family: "Pretendard-Regular"; */
`;

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.View`
  margin-bottom: 10px;
  margin-top: 52px;
  margin-left: 20px;
`;
const Headerimg = require("../../assets/onBoarding/Header2.png");
const Wrapper = styled.View`
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
