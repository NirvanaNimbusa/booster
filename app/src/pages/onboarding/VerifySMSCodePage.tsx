import React, { useState } from "react";
import { BigButton } from "../../components/Button";
import { PageContainer } from "../../components/Page";
import { BigTitle } from "../../components/Title";
import { Caption } from "react-native-paper";
import { Alert, Text } from "react-native";
import SMSCodeInput from "./components/SMSCodeInput";
import { RouteProp } from "@react-navigation/core";
import { OnboardingStackParams } from "../Routes";

export interface VerifySMSCodePageParams {
  confirmation: (code: string) => Promise<any>;
}

const VerifySMSCodePage = ({
  route
}: {
  route: RouteProp<OnboardingStackParams, "VerifySMSCodePage">;
}) => {
  const confirmation = route.params.confirmation;
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <PageContainer>
      <BigTitle>Enter verification code</BigTitle>
      <SMSCodeInput value={code} onChangeText={setCode} />
      <BigButton
        loading={loading}
        disabled={code.length !== 6}
        onPress={async () => {
          try {
            setLoading(true);
            await confirmation(code);
          } catch (e) {
            Alert.alert("Error", e.message);
          } finally {
            setLoading(false);
          }
        }}
      >
        Next
      </BigButton>
      <Caption>
        By signing up or logging in, you agree to our{" "}
        <Text style={{ fontWeight: "bold" }}>Terms & Conditions</Text> and{" "}
        <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>.
      </Caption>
    </PageContainer>
  );
};

export default VerifySMSCodePage;
