import React from "react";
import { ThemeProvider } from "./src/utils/theme";
import SelectAddressScreen from "./src/screens/SelectAddressScreen";

export default function App() {
  return (
    <ThemeProvider>
      <SelectAddressScreen />
    </ThemeProvider>
  );
}
