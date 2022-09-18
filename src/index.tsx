import {StrictMode} from "react";
// @ts-ignore
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
document.title = "Guess the Number"
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
