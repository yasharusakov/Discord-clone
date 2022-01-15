import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../register';
import Login from '../login';
import Channels from '../channels';
import useAuthState from '../../hooks/useAuthState';

function AppRouter() {
    const [ user ] = useAuthState();

    return user ? 
        (
            <Routes>
                <Route path="/" element={<Navigate to="/channels/@me"/>}/>
                <Route path="/channels/@me" element={<Channels/>}/>
                <Route path="*" element={<Navigate to="/channels/@me"/>}/>
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