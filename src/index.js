import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById('root')
);