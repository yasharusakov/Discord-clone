import './message.scss';

function Message({username, text, photoURL, picture}) {
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
                            picture ? (
                                <>
                                    <img src={picture} alt={picture} />
                                    <p>{text}</p>
                                </>
                            ) :
                            <p>{text}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;