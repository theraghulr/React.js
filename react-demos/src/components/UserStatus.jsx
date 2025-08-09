import React from 'react'

const UserStatus = () => {
    const loggedIn = true
    const isadmin = false
  return (
    <div>
        {loggedIn==true && isadmin == true && <h2>welcome Admin</h2>}
        {loggedIn==true && isadmin == false && <h2>welcome User</h2>}
    </div>
  )
}

export default UserStatus