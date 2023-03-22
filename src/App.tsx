import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
