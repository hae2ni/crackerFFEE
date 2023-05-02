import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Display2 } from "../../static/text";
import { main } from "../../styles/Color";
import DatePicker from "react-native-datepicker";

const days = ["월", "화", "수", "목", "금", "토", "일"];

export default function ChooseTime() {
  const [isTouched, setIsTouched] = useState(Array(days.length).fill(false));
  const [selectedDayIndex, setSelectedDayIndex] = useState(-1);
  const [selectedTime, setSelectedTime] = useState(null);

  const onPressDay = (index) => {
    setIsTouched((prev) => {
      const nextState = [...prev];
      nextState[index] = !prev[index];
      return nextState;
    });
    setSelectedDayIndex(index);
  };

  const onTimeChange = (time) => {
    setSelectedTime(time);
  };

  const daysList = days.map((day, index) => (
    <Days
      key={index}
      isTouched={isTouched[index]}
      onPress={() => onPressDay(index)}
    >
      <DayContainer isTouched={isTouched[index]}>{day}</DayContainer>
    </Days>
  ));

  return (
    <Container>
      <HeaderWrapper>
        <Image source={Headerimg} />
      </HeaderWrapper>
      <MainContainer>
        <Display2>알바 시간 정하기</Display2>
        <DayListContainer>{daysList}</DayListContainer>
        <TimePick>
          <Text style={{ top: 15 }}>오전</Text>
          {selectedDayIndex >= 0 && (
            <DatePickerContainer>
              <DatePicker
                style={{ width: 265 }}
                date={selectedTime}
                mode="time"
                format="HH:mm"
                minuteInterval={30}
                onDateChange={onTimeChange}
                showIcon={false}
                locale="ko"
                confirmBtnText="확인"
                cancelBtnText="취소"
                customStyles={{
                  dateInput: {
                    display: "flex",
                    borderWidth: 0,
                    width: 265,
                    borderRadius: 10,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    padding: 0,
                    margin: 0,
                  },
                  btnTextConfirm: {
                    color: "#6100FF",
                  },
                  btnTextCancel: {
                    color: "#cccccc",
                  },
                  Text: {
                    color: "#ffffff",
                  },
                }}
                showTime={false}
              />
            </DatePickerContainer>
          )}
        </TimePick>
        <TimePick>
          <Text style={{ top: 15 }}>오후</Text>
          {selectedDayIndex >= 0 && (
            <DatePickerContainer>
              <DatePicker
                style={{ width: 265 }}
                date={selectedTime}
                mode="time"
                format="HH:mm"
                minuteInterval={30}
                onDateChange={onTimeChange}
                showIcon={false}
                locale="ko"
                confirmBtnText="확인"
                cancelBtnText="취소"
                customStyles={{
                  dateInput: {
                    display: "flex",
                    borderWidth: 0,

                    borderRadius: 10,
                    backgroundColor: "#f5f5f5",
                    alignItems: "center",
                    padding: 0,
                    margin: 0,
                  },
                  btnTextConfirm: {
                    color: "#6100FF",
                  },
                  btnTextCancel: {
                    color: "#cccccc",
                  },
                  Text: {
                    color: "#ffffff",
                  },
                }}
                showTime={false}
              />
            </DatePickerContainer>
          )}
        </TimePick>
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
  color: ${(props) => (props.isTouched ? "white" : "black")};
`;

const DayListContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const DatePickerContainer = styled(View)`
  margin-top: 20px;
  margin-left: 25px;
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

const TimePick = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
