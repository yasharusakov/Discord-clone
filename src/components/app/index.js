import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../appRouter';

import '../../styles/style.scss';

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;