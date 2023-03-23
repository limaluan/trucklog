import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./shared/styles/global";
import { defaultTheme } from "./shared/styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
