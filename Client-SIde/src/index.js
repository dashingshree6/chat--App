import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./Reducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
