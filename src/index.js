import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

// ReactDOM.render(<App />,document.getElementById('root')

// new---------------------------------

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('netflix')
);

// new---------------------------------