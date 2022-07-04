import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UsersList from '../../components/usersList/UsersList'
import { addUser, clearName, deleteUsersAll, handleName } from '../../store/usersSlice'

function UsersPage() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.usersReducer.name)
    const users = useSelector(state => state.usersReducer.users)

    const handleNameFunc = (e) => {
        dispatch(handleName(e.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(name))
        dispatch(clearName())
    }
    const deleteUsersFunc = () => {
        dispatch(deleteUsersAll())
    }

    return (
        <div>
            <input type='text' onChange={handleNameFunc} value={name} />

            <button onClick={addUserFunc} >create user</button>
            <hr />
            <UsersList users={users} />
            <button onClick={deleteUsersFunc} >delete all</button>
        </div>
    )
}

export default UsersPage
