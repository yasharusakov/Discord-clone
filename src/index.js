import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './components/app';

import './firebase';

render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById('root')
);