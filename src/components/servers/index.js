import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { 
    collection, 
    onSnapshot, 
    getFirestore, 
    query, 
    orderBy
} from 'firebase/firestore';

import './servers.scss';

function Servers() {
    const[servers, setServers] = useState([]);
    
    useEffect(() => {
        const collectionRef = collection(getFirestore(), 'servers');

        const q = query(collectionRef, orderBy('timestamp'));

        const unsub = onSnapshot(q, (snapshot) => {
            setServers(snapshot.docs.map(doc => ({...doc.data(), serverId: doc.id})));
        });

        return unsub;
    }, [])

    return (
        <>
            {
                servers.map(item => {
                    const path = `/channels/${item.serverId}`;
                    const serverName = item.serverName.slice(0, 5);

                    return (
                        <Link 
                            key={item.serverId} 
                            to={path}>
                            <div className="channel">
                                {
                                    item.serverPhoto ? <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src={item.serverPhoto} alt={item.serverName}/> :
                                    <h5 style={{color: '#fff'}}>{serverName}</h5>
                                }
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )

}

export default Servers;