import React from 'react'

function UserForm() {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' id='name' 
          placeholder='Digite seu nome' required />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input type="email" email='email' id='email' 
          placeholder='Digite seu e-mail' required />
        </div>
    </div>
  )
}

export default UserForm