import { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from 'firebase/auth';

import './channels.scss';

function Channels() {
    const [userData, setUserData] = useState({});
    const auth = getAuth();
    const db = getDatabase();
    const userRef = ref(db, 'users/' + auth.currentUser.uid);

    useEffect(() => {
        onValue(userRef, (snapshot) => {
            setUserData(snapshot.val())
        });
    }, [])

    return (
        <div className="channels">

        </div>
    )
}

export default Channels;