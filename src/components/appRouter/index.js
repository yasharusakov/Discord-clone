import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../register';
import Login from '../login';
import Channels from '../channels';

function AppRouter() {
    const user = false;

    return user ? 
        (
            <Routes>
                <Route path="/" element={<Navigate to="/channels"/>}/>
                <Route path="/channels" element={<Channels/>}/>
                <Route path="*" element={<Navigate to="/channels"/>}/>
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