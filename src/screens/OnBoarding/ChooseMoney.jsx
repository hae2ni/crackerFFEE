import React, { Image, View } from "react-native";
import styled from "styled-components/native";
import { Caption1, Display2 } from "../../static/text";
import { main } from "../../styles/Color";

export default function ChooseMoney() {
  return (
    <Container>
      <HeaderWrapper>
        <Image source={Headerimg} />
      </HeaderWrapper>

      <MainContainer>
        <Display2>시급 입력하기</Display2>
        <MainContainer />
        <Caption1>시급</Caption1>
      </MainContainer>
      <MoneyInputContainer>
        <MoneyInput
          placeholder="9,620"
          placeholderTextColor="#CCCCCC"
          keyboardType="number-pad"
        />
      </MoneyInputContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Headerimg = require("../../assets/onBoarding/Header4.png");
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

const MoneyInputContainer = styled.View`
  margin: 18px 20px;
`;

const MoneyInput = styled.TextInput`
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
