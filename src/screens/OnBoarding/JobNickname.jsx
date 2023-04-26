import React from "react-native";
import styled from "styled-components/native";
import { Display2, Caption1 } from "../../static/text";

export default function JobNickname() {
  return (
    <Container>
      <HeaderWrapper>
        <Image source={Headerimg} />
      </HeaderWrapper>

      <MainContainer>
        <Display2>알바 근무지 별명 짓기</Display2>
        <MainContainer />
        <Caption1>알바 근무지 별명</Caption1>
      </MainContainer>
      <NicknameInputContainer>
        <NicknameInput
          placeholder="ex, 집앞편의점, 학교카페"
          placeholderTextColor="#CCCCCC"
        />
      </NicknameInputContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Headerimg = require("../../assets/onBoarding/Header1.png");
const HeaderWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  margin-bottom: 48px;
`;

const MainContainer = styled.View`
  margin: 20px;
`;

const NicknameInputContainer = styled.View`
  margin: 18px 20px;
`;

const NicknameInput = styled.TextInput`
  font-size: 16;
  line-height: 19;
  border-bottom: 5px;
  :focus {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 50px;
    border-bottom-color: ${main};
  }
`;
