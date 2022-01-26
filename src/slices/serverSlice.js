import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    serverName: '',
    channelName: '',
}

const serverSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {
        setServerName: (state, action) => {
            state.serverName = action.payload;
        },
        setChannelName: (state, action) => {
            state.channelName = action.payload;
        },
    }
})

export default serverSlice.reducer;

export const { 
    setServerName,
    setChannelName
} = serverSlice.actions;