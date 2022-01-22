import './message.scss';

function Message({username, text, photoURL, fileURL}) {
    return (
        <div className="message">
            <div className="message-container">
                <div className="message-row">
                    <div className="message-picture">
                        <img src={photoURL} alt={photoURL} />
                    </div>
                    <div className="message-data">
                        <div className="message-name">{username}</div>
                        {
                            fileURL ? <img src={fileURL} alt={fileURL} /> :
                            <p>{text}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;