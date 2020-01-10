import styled from "styled-components";
import { TextInput, ScrollView, Dimensions } from "react-native";
import React from "react";

const Container = styled(ScrollView)`
  flex: 1;
`;

const ChatInfoPage = () => {
  return (
    <Container>
      <TextInput
        style={{ marginTop: Dimensions.get("window").height }}
        placeholder="TEST"
      />
    </Container>
  );
};

export default ChatInfoPage;
