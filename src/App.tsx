import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import { DriversProvider } from "./shared/hooks/useDrivers";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DriversProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <GlobalStyles />
      </DriversProvider>
    </ThemeProvider>
  );
}

export default App;
