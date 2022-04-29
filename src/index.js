import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const serverURL = process.env.REACT_APP_SERVER_URL;
const appId = process.env.REACT_APP_APP_ID;
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={serverURL} appId={appId}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
