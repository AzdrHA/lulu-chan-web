import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {BaseRouter} from '@app/router/BaseRouter';
import '@styles/index.css';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <BaseRouter/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('__lulu-chan'),
);

