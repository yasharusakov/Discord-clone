import ChannelLayout from "../channelLayout";

function BaseLayout({name}) {

    switch(name) {
        case '@me': 
            return '@me';
        case 'friend': 
            return 'friend';
        case 'channel':
            return <ChannelLayout/>
        case 'channel-text':
            return <ChannelLayout/>
        default: 
            return 'Something wrong!'
    }

}

export default BaseLayout;