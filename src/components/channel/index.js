import { useParams } from 'react-router-dom';

import './channel.scss';

function Channel() {
    const { channelID, textChannelID } = useParams();
    return (
        <div>
            {channelID}
            {textChannelID}
        </div>
    )
}

export default Channel;