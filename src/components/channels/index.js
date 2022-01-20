import { useEffect } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { setUserData } from "../../slices/userSlice";
import { useParams } from "react-router-dom";
import Channel from "../channel";

import './channels.scss';

function Channels() {
    const { channelID } = useParams();
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
        switch(channelID) {
            case '@me': 
                return '@me'
            default: 
                return <Channel/>
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