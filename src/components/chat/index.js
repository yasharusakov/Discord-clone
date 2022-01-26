import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, serverTimestamp, doc, onSnapshot, query, orderBy, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import Message from '../message';
import Members from '../members';

import './chat.scss';

function Chat() {
    const auth = getAuth();
    const db = getFirestore()
    const { channelID, textChannelID } = useParams();
    const [text, setText] = useState('');
    const [messages, setMessages] = useState();
    const {username, photoURL} = useSelector(state => state.user);
    const channelName = useSelector(state => state.server.channelName);

    useEffect(() => {
        if (textChannelID) {
            const q2 = query(collection(db, "servers", channelID, "textChannels", textChannelID, "messages"), orderBy('timestamp'));
            onSnapshot(q2, (querySnapshot) => {
                const items = [];
                querySnapshot.forEach(doc => {
                    items.push({id: doc.id, ...doc.data()});
                })
                setMessages(items)
            })
        }
    }, [channelID, textChannelID])

    const sendMessage = async (e) => {
        e.preventDefault();

        const id = uuidv4();

        const payload = {
            username: username,
            photoURL: photoURL,
            text: text,
            userID: auth.currentUser.uid,
            timestamp: serverTimestamp()
        }

        await setDoc(doc(db, "servers", channelID, 'textChannels', textChannelID, "messages", id), payload);

        setText('');
    }

    const elements = messages ? textChannelID ? messages.map(item => {
        return <Message key={item.id} username={item.username} photoURL={item.photoURL} text={item.text} />
    }) : '' : '';

    return (
        <div className="chat">
            <div className="chat__container">
                <header className="chat__header">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
                    <h3 className="chat__header-name">{channelName}</h3>
                </header>
                <section className="channel__section">
                    <div>
                        <main onLoad={(e) => {
                            e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
                        }}>
                            {elements}
                        </main>
                        <form onSubmit={sendMessage} className="chat__form">
                            <div>
                                <div style={{width: '24px', height: '24px', position: 'relative'}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path></svg>
                                    <input type="file" accept=".jpg,.jpeg,.png,.gif" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', opacity: '0', cursor: 'pointer', fontSize: '0px'}} />
                                </div>
                            </div>
                            <input value={text} onChange={(e) => setText(e.target.value)} autoComplete="off" placeholder={"Написать #" + channelName} type="text" />
                        </form>
                    </div>
                    <Members/>
                </section>
            </div>
        </div>
    )
}

export default Chat;