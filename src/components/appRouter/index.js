import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../register';
import Login from '../login';
import Chat from '../chat';

function AppRouter() {
    const user = false;

    return user ? 
        (
            <Routes>
                <Route path="/" element={<Navigate to="/chat"/>}/>
                <Route path="/chat" element={<Chat/>}/>
                <Route path="*" element={<Navigate to="/chat"/>}/>
            </Routes>
        )
        :
        (
            <Routes>
                <Route path="/" element={<Navigate to='/login'/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<Navigate to='/login'/>}/>
            </Routes>
        )
}

export default AppRouter;