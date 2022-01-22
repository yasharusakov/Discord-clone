import ChannelSideBar from '../sideBarChannel';
import Chat from '../chat';

import './channelLayout.scss';

function ChannelLayout() {
    return (
        <div className="channel" >
            <div className="channel__container">
                <ChannelSideBar/>
                <Chat/>
            </div>
        </div>
    )
}

export default ChannelLayout;