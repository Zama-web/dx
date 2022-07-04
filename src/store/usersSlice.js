import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        name: ''
    },
    reducers: {
        addUser(state, action) {
            state.users = [...state.users, action.payload]
        },
        handleName(state, action) {
            state.name = action.payload
        },
        clearName(state) {
            state.name = ''
        },
        deleteUsersAll(state) {
            state.users = []
        }
    }
})

export const { addUser, handleName, clearName, deleteUsersAll } = usersSlice.actions
export default usersSlice.reducer