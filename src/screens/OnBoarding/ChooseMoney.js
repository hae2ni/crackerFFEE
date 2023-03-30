import React, { Image } from "react-native";
import styled from "styled-components/native";
import { Caption1, Display2 } from "../../static/text";

export default function ChooseMoney() {
  return (
    <Container>
      <HeaderWrapper>{/* <Image source={Headerimg} /> */}</HeaderWrapper>
      <Display2>시급 입력하기</Display2>
      <Caption1>시급</Caption1>
      <MoneyInput
        placeholder="9,620"
        placeholderTextColor="#CCCCCC"
        underlineColorAndroid={"#CCCCCC"}
      />
    </Container>
  );
}

const MoneyInput = styled.TextInput`
  font-size: 16;
  line-height: 19;
`;

const Container = styled.View`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

//const Headerimg = require("../../assets/onBoarding/Header4.png");
const HeaderWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
