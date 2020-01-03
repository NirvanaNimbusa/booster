import React from "react";
import codePush from "react-native-code-push";
import { Provider as PaperProvider } from "react-native-paper";
import Routes from "./booster/pages/Routes";
import theme from "./booster/styles/theme";

const App = () => (
  <PaperProvider theme={theme}>
    <Routes />
  </PaperProvider>
);

export default codePush({
  checkFrequency: __DEV__
    ? codePush.CheckFrequency.MANUAL
    : codePush.CheckFrequency.ON_APP_RESUME
})(App);
