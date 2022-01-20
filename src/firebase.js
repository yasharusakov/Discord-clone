import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCqU5Jo-Ots2IgozTqs7rqbtRpZZUce1uI",
    authDomain: "discord-clone-d31e2.firebaseapp.com",
    projectId: "discord-clone-d31e2",
    storageBucket: "discord-clone-d31e2.appspot.com",
    messagingSenderId: "286783086517",
    appId: "1:286783086517:web:61df40afb843319bad43fc",
    measurementId: "G-PB1V6YPRSE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);