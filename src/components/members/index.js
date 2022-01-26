import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, onSnapshot, getFirestore } from "firebase/firestore";
import { ref, onValue, getDatabase } from 'firebase/database';

import Member from '../member';

import './members.scss';

function Members() {
    const { channelID } = useParams();
    const [owner, setOwner] = useState({});

    useEffect(() => {
        const unsub = onSnapshot(doc(getFirestore(), "servers", channelID), (doc) => {
            const ownerID = doc.data().serverCreator;
            const userRef = ref(getDatabase(), 'users/' + ownerID);
            onValue(userRef, (snapshot) => {
                const { username, photoURL } = snapshot.val()
                setOwner({username, photoURL})
            });
        });

        return unsub;
    }, [channelID])

    return (
        <div className="members">
            <div className="members__administrator">
                <div className="members__header">ADMINISTRATOR - 1</div>
                <div>
                    <Member {...owner} />
                    <svg aria-label="Владелец сервера" width="24" height="24" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z" fill="currentColor"></path></svg>
                </div>
            </div>
            <div className="members__users">
                <div className="members__header">В СЕТИ - 100</div>
                <div>
                    {/* <Member/> */}
                </div>
            </div>
        </div>
    )
}

export default Members;