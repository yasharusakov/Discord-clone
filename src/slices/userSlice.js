import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    photoURL: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
        }
    }
})

export default userSlice.reducer;

export const { 
    setUserData
} = userSlice.actions;