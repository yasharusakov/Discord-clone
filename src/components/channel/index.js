import { useParams } from 'react-router-dom';
import ChannelSideBar from '../channelSideBar';

import './channel.scss';

function Channel() {
    const { channelID, textChannelID } = useParams();
    return (
        <div className="channel" >
            <div className="channel__container">
                <ChannelSideBar/>
            </div>
        </div>
    )
}

export default Channel;