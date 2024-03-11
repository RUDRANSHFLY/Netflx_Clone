import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    logIn : (state , action ) => {
        state.user = action.payload;
    },
    logOut : (state) => {
        state.user = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { logIn , logOut } = userSlice.actions;


type User = {
  uid: string;
  email: string;
};

interface RootState {
  user: {
    user: User;
  };
}

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer