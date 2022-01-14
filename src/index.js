import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/app';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBRlepJzimbJ1_krhW5qkRfJeAc5iPgZM",
  authDomain: "discord-clone-3b83e.firebaseapp.com",
  projectId: "discord-clone-3b83e",
  storageBucket: "discord-clone-3b83e.appspot.com",
  messagingSenderId: "542472228717",
  appId: "1:542472228717:web:dd93f3ac0e27b6c476d464",
  measurementId: "G-CXJJJMBKFC"
};

const app = initializeApp(firebaseConfig);

render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById('root')
);