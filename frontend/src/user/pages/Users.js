import React from 'react'
import UserList from '../components/UserList'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'maximuz',
            image: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            places: 3
        },
        {
            id: 'u2',
            name: 'maximuz',
            image: 'https://loremflickr.com/320/240',
            places: 3
        },
        {
            id: 'u3',
            name: 'maximuz',
            image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            places: 3
        }
    ]
    // const USERS = []
    return (
        <UserList items={USERS} />
    )
}

export default Users