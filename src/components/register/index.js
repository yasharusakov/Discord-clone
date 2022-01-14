import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password);
    }

    return (
        <div className="panel">
            <div className="panel__container">
                <form onSubmit={createUser} className="panel__form">
                    <svg fill="none" height="36" viewBox="0 0 130 36" width="130" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m27.5247 8.06243c-2.1034-.96349-4.3524-1.66374-6.7036-2.06243-.2888.51114-.6261 1.19861-.8587 1.74553-2.4995-.36802-4.9759-.36802-7.4293 0-.2326-.54692-.5777-1.23439-.869-1.74553-2.35376.39869-4.60533 1.1015-6.70864 2.06754-4.242451 6.27676-5.392506 12.39766-4.817478 18.43156 2.813808 2.0574 5.540698 3.3071 8.221628 4.1249.6619-.892 1.25228-1.8401 1.76089-2.8394-.96862-.3603-1.89634-.805-2.77294-1.3213.23259-.1686.46001-.345.67979-.5265 5.34655 2.4484 11.15555 2.4484 16.43815 0 .2224.1815.4498.3579.6798.5265-.8791.5188-1.8094.9635-2.778 1.3239.5086.9967 1.0964 1.9474 1.7609 2.8393 2.6834-.8178 5.4129-2.0675 8.2267-4.1274.6747-6.9949-1.1526-13.0595-4.8302-18.43667zm-16.6759 14.72587c-1.6049 0-2.92111-1.467-2.92111-3.2534s1.28807-3.2559 2.92111-3.2559c1.6331 0 2.9493 1.4669 2.9212 3.2559.0025 1.7864-1.2881 3.2534-2.9212 3.2534zm10.7952 0c-1.6049 0-2.9211-1.467-2.9211-3.2534s1.2881-3.2559 2.9211-3.2559c1.6331 0 2.9493 1.4669 2.9212 3.2559 0 1.7864-1.2881 3.2534-2.9212 3.2534z"/><path d="m43.6636 12.2823h6.9771c1.6817 0 3.1025.2632 4.268.7871 1.1629.524 2.0344 1.2549 2.6119 2.1902.5774.9354.8689 2.0062.8689 3.2125 0 1.1808-.3015 2.2516-.9046 3.21-.6031.9609-1.5208 1.72-2.7552 2.2797-1.2343.5596-2.7627.8408-4.5901.8408h-6.476zm6.4047 9.3385c1.1318 0 2.0033-.2837 2.6119-.8485.6081-.5674.9122-1.3392.9122-2.318 0-.9073-.2709-1.6306-.8127-2.1724s-1.362-.8152-2.4586-.8152h-2.1825v6.1541z"/><path d="m68.8346 24.7872c-.966-.2505-1.8375-.6134-2.6119-1.0913v-2.9697c.5855.4524 1.37.8255 2.3541 1.1194.9835.2914 1.9344.437 2.8546.437.4292 0 .7539-.0562.9735-.1687.2196-.1124.3297-.2478.3297-.4037 0-.179-.0588-.3272-.1789-.4473s-.3528-.2198-.6976-.3041l-2.147-.483c-1.2293-.2863-2.1008-.6824-2.6195-1.191-.5186-.506-.777-1.1705-.777-1.9934 0-.6926.2252-1.2932.68-1.8069.4523-.5137 1.0962-.9098 1.932-1.1884.8357-.2811 1.8123-.4216 2.934-.4216 1.0017 0 1.9194.1073 2.7552.322.8353.2146 1.5253.4881 2.0751.8229v2.8087c-.5623-.3348-1.2061-.5981-1.9424-.7974-.7333-.1968-1.4877-.2939-2.2642-.2939-1.1222 0-1.6816.1917-1.6816.5725 0 .1789.0869.3118.2603.4012.1739.0895.4936.1814.9559.2786l1.7892.322c1.168.2019 2.0395.5572 2.612 1.0632.5724.506.8584 1.2548.8584 2.2464 0 1.0862-.4725 1.9474-1.4208 2.5863-.9484.639-2.2923.9584-4.0353.9584-1.0252-.0025-2.0219-.1277-2.9878-.3782z"/><path d="m81.5008 24.4114c-1.0247-.5009-1.7992-1.1807-2.3154-2.0394-.5161-.8587-.777-1.8248-.777-2.8982 0-1.0733.2684-2.0343.8052-2.8802.5367-.846 1.3238-1.5104 2.3616-1.9935 1.0373-.4829 2.2767-.7232 3.7211-.7232 1.7887 0 3.2739.3757 4.4544 1.1271v3.2738c-.4166-.2862-.9021-.5188-1.457-.6977-.5543-.1789-1.1474-.2684-1.7811-.2684-1.1092 0-1.9757.2019-2.6019.6083-.6257.4063-.9403.9354-.9403 1.5922 0 .644.3041 1.1705.9127 1.5845.6081.4115 1.4896.6185 2.6476.6185.595 0 1.1831-.0869 1.763-.2581.578-.1738 1.0761-.386 1.4927-.6364v3.1665c-1.3112.7871-2.8315 1.1807-4.5619 1.1807-1.4565-.0051-2.6989-.2556-3.7237-.7565z"/><path d="m94.2132 24.4116c-1.0328-.5009-1.8198-1.1858-2.3616-2.0573s-.8152-1.8426-.8152-2.916.2709-2.0318.8152-2.8726 1.3263-1.5002 2.3536-1.9781c1.0247-.4779 2.249-.7156 3.6673-.7156 1.4188 0 2.6425.2377 3.6675.7156s1.807 1.1322 2.344 1.9678c.536.8358.805 1.7942.805 2.8803 0 1.0734-.269 2.0446-.805 2.916-.537.8716-1.321 1.5565-2.354 2.0574s-2.2518.7514-3.66.7514-2.627-.248-3.6568-.7489zm5.4359-3.1741c.4339-.4345.6539-1.0095.6539-1.7251s-.217-1.2855-.6539-1.7072c-.4347-.4243-1.0278-.6364-1.7791-.6364-.7639 0-1.362.2121-1.7992.6364-.4343.4242-.6514.9916-.6514 1.7072s.2171 1.2906.6514 1.7251c.4347.4344 1.0353.6542 1.7992.6542.7513-.0025 1.3444-.2198 1.7791-.6542z"/><path d="m115.438 14.5364v3.8642c-.455-.299-1.043-.4473-1.772-.4473-.952 0-1.689.2888-2.2.8665-.513.5775-.769 1.4771-.769 2.6936v3.2918h-4.383v-10.4656h4.294v3.3275c.237-1.2165.623-2.1135 1.155-2.6937.529-.5775 1.214-.8663 2.047-.8663.631 0 1.173.1431 1.628.4293z"/><path d="m130 11.9245v12.8806h-4.383v-2.3436c-.37.8818-.933 1.5539-1.689 2.0139-.757.4575-1.692.6875-2.802.6875-.991 0-1.855-.2402-2.593-.7232-.739-.4831-1.309-1.145-1.71-1.9858-.399-.8408-.601-1.7915-.601-2.8547-.012-1.0964.2-2.0803.636-2.9518.435-.8715 1.051-1.5513 1.843-2.0395.793-.4881 1.697-.7334 2.712-.7334 2.088 0 3.488.9072 4.204 2.7192v-4.6692zm-5.037 9.2413c.447-.4344.669-.9992.669-1.6893 0-.667-.217-1.2114-.651-1.628-.435-.4165-1.031-.6261-1.779-.6261-.739 0-1.329.2122-1.771.6364s-.662.9737-.662 1.6535.22 1.2344.662 1.6637c.442.4294 1.025.6441 1.753.6441.738-.0026 1.331-.2198 1.779-.6543z"/><path d="m62.0824 15.4539c1.2067 0 2.1853-.8787 2.1853-1.9627s-.9786-1.9628-2.1853-1.9628-2.1852.8788-2.1852 1.9628.9785 1.9627 2.1852 1.9627z"/><path d="m59.8953 16.806c1.3393.5776 3.0004.6032 4.3704 0v8.0555h-4.3704z"/></g></svg>
                    <h1 className="panel__title">Создать учётную запись</h1>
                    <div className="panel__email">
                        <h3>АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ</h3>
                        <input value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} aria-label="АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ" autoComplete="off" type="text" />
                    </div>
                    <div className="panel__name">
                        <h3>ИМЯ ПОЛЬЗОВАТЕЛЯ</h3>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} aria-label="ИМЯ ПОЛЬЗОВАТЕЛЯ" autoComplete="off" type="text" />
                    </div>
                    <div className="panel__password">
                        <h3>ПАРОЛЬ</h3>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} aria-label="ПАРОЛЬ" autoComplete="off" type="password" />
                    </div>
                    <div className="panel__submit">
                        <button type="submit">Продолжить</button>
                    </div>
                    <div className="panel__go-to-login">
                        <Link to="/login">Уже зарегистрированы?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;