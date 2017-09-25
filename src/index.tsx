import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import Hello from "./components/Hello";

declare const module: { hot: any };

const render = () => ReactDOM.render(
    <AppContainer>
        <Hello compiler="TypeScript" framework="React"/>
    </AppContainer>,
    document.getElementById("example")
);

render();

if (module.hot) {
  module.hot.accept('./components/Hello', render)
}
