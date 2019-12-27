import React, { useEffect, useState } from "react";
import { BigTitle } from "../../components/Title";
import { BigButton } from "../../components/Button";
import { Caption } from "react-native-paper";
import { PageContainer } from "../../components/Page";
import { Alert, Text } from "react-native";
import PhoneNumberInputBox, {
  defaultCountry
} from "./components/PhoneNumberInput";
import auth from "@react-native-firebase/auth";
import { VerifySMSCodePageParams } from "./VerifySMSCodePage";
import { StackNavigationProp } from "@react-navigation/stack";
import { OnBoardingParams, OnboardingStackParams } from "../Routes";
import { CompositeNavigationProp } from "@react-navigation/core";

const ContinueWithPhonePage = ({
  navigation
}: {
  navigation: CompositeNavigationProp<
    StackNavigationProp<OnBoardingParams>,
    StackNavigationProp<OnboardingStackParams>
  >;
}) => {
  useEffect(() => {
    if (__DEV__) {
      auth().settings.appVerificationDisabledForTesting = true;
    }
  }, []);
  const [country, setCountry] = useState(defaultCountry);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <PageContainer>
      <BigTitle>Enter your{"\n"}mobile number</BigTitle>
      <PhoneNumberInputBox
        onSelectCountry={() => {
          navigation.push("SelectCountryPage", { onSelect: setCountry });
        }}
        country={country}
        phone={phone}
        onPhoneChange={setPhone}
      />
      <BigButton
        loading={loading}
        disabled={phone.length === 0}
        onPress={async () => {
          try {
            setLoading(true);
            const confirmation = await auth().signInWithPhoneNumber(
              country.dial_code + phone
            );
            navigation.push("VerifySMSCodePage", {
              confirmation: confirmation.confirm.bind(confirmation)
            } as VerifySMSCodePageParams);
          } catch (e) {
            if (e.code !== "auth/popup-closed-by-user") {
              Alert.alert("Error", e.message);
            }
          } finally {
            setLoading(false);
          }
        }}
      >
        Send Verification Code
      </BigButton>
      <Caption>
        By signing up or logging in, you agree to our{" "}
        <Text style={{ fontWeight: "bold" }}>Terms & Conditions</Text> and{" "}
        <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>.
      </Caption>
    </PageContainer>
  );
};

export default ContinueWithPhonePage;
