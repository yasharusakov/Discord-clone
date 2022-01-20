import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../register';
import Login from '../login';
import Channels from '../channels';
import Loader from '../loader';

import SideBarChannels from "../sideBarChannels";
import User from '../user';

import useAuthState from '../../hooks/useAuthState';

import './appRouter.scss';

function AppRouter() {
    const [ user, loading ] = useAuthState();


    if (loading) {
        return <Loader/>
    }

    return user ? 
        (
            <div className="Router">
                <SideBarChannels/>
                <User/>
                <Routes>
                    <Route path="/" element={<Navigate to="/channels"/>}/>
                    <Route path="/channels" element={<Navigate to="/channels/@me" />}/>
                    <Route path="/channels/@me" element={<Channels name="@me"/>}/>
                    <Route path="/channels/@me/:channelID" element={<Channels name="friend"/>}/>
                    <Route path="/channels/:channelID" element={<Channels name="channel" />}/>
                    <Route path="/channels/:channelID/:textChannelID" element={<Channels name="channel" />}/>
                    <Route path="*" element={<Navigate to="/channels"/>}/>
                </Routes>
            </div>
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