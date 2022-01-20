import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    photoURL: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
        },
        setPhotoURL: (state, action) => {
            state.photoURL = action.payload;
        }
    }
})

export default userSlice.reducer;

export const { 
    setUserData,
    setPhotoURL
} = userSlice.actions;