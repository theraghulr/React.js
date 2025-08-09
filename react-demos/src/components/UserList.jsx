import React from 'react'

const UserList = () => {
    const Users =[{id:1,names:"Rah",age:22},
        {id:2,names:"Max Verstappen",age:27},
        {id:2,names:"Charles Leclrec",age:28}]
  return (
    <div>
        
            {Users.map(({id,names,age})=>(
                <ul key={id}>
                    <li>{id}</li>
                    <li>{names}</li>
                    <li>{age}</li>
                </ul>
            ))}
        
    </div>
  )
}

export default UserList