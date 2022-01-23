import './member.scss';

function Member({username, photoURL}) {
    return (
        <div className="member">
            <div className="member__container">
                <img src={photoURL} alt={username} />
                <div className="member__username">{username}</div>
            </div>
        </div>
    )
}

export default Member;