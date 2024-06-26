import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, Theme } from "@emotion/react";

const theme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1f2022",
    text: "#333",

    bg: {
      primary: "#fff5e1",
    },
  },
  fonts: {
    body: "Georgia, serif",
    heading: "Helvetica, Arial, sans-serif",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App></App>
  </ThemeProvider>
);
