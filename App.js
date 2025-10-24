import React from "react";
import { ThemeProvider } from "./utils/theme";
import SelectAddressScreen from "./screens/SelectAddressScreen";

export default function App() {
  return (
    <ThemeProvider>
      <SelectAddressScreen />
    </ThemeProvider>
  );
}
