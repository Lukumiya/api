import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import * as serviceWorker from './serviceWorker';

import 'noty/src/noty.scss';
import 'noty/src/themes/mint.scss';
import './styles/index.scss';

const root = document.getElementById("root");

ReactDOM.render(
  <Suspense fallback={null}>
    <I18nextProvider i18n={i18n}>
      <App/>
    </I18nextProvider>
  </Suspense>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
