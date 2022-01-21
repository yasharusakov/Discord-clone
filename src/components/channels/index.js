import { useEffect } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { setUserData } from "../../slices/userSlice";
import Channel from "../channel";

import './channels.scss';

function Channels({name}) {
    const dispatch = useDispatch();
    const auth = getAuth();
    const db = getDatabase();
    
    useEffect(() => {
        const userRef = ref(db, 'users/' + auth.currentUser.uid);
        onValue(userRef, (snapshot) => {
            dispatch(setUserData(snapshot.val()));
        });
    }, [])

    function channels() {
        switch(name) {
            case '@me': 
                return '@me';
            case 'friend': 
                return 'friend';
            case 'channel':
                return <Channel/>
            case 'channel-text':
                return <Channel/>
            default: 
                throw new Error('Smth wrong!');
        }
    }

    return (
        <div className="channels">
            <div className="channels__container">
                {channels()}
            </div>
        </div>
    )
}

export default Channels;