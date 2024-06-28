import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Regiane", "Gleison", "Vera"])

    const [users, setUsers] = useState([
        {id: 1, name: "Regiane", age: 29},
        {id: 2, name: "Gleison", age: 34},
        {id: 3, name: "Vera", age: 61},

    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id)
     )
    }

  return (
    <div>
        {/* 4- Render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        {/* 5- Render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        {/* previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender