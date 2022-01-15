import { useEffect } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { setUserData } from "../../slices/userSlice";

import SideBarChannels from "../sideBarChannels";

import './channels.scss';

function Channels() {
    const dispatch = useDispatch();
    const auth = getAuth();
    const db = getDatabase();
    
    useEffect(() => {
        const userRef = ref(db, 'users/' + auth.currentUser.uid);
        onValue(userRef, (snapshot) => {
            dispatch(setUserData(snapshot.val()));
        });
    }, [])

    return (
        <div className="channels">
            <div className="channels__container">
                <SideBarChannels/>
            </div>
        </div>
    )
}

export default Channels;