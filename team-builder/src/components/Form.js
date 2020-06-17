import React from 'react'

export default function Form(props){
    const{
        values,
        onInputChange,
        onSubmit,
    }=props

    return(
        <form onSubmit={onSubmit}>


            <label>Username:&nbsp;
                <input
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onInputChange}
                    maxLength='100'
                
                />
            </label>
            <label>Email:&nbsp;
            <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onInputChange}
                    maxLength='100'
                
                />
            </label>
            <label>Role:&nbsp;
                <select
                    name='role'
                    value={values.role}
                    onChange={onInputChange}
                
                >
                   
                    <option value=''>---Select a Role---</option>
                    <option value='Designer'>Designer</option>
                    <option value='Writer'>Writer</option>
                    <option value='RolePlayer'>RolePlayer</option>
                </select>
            </label>
            <div>
                <h2>Add Team Memeber</h2>
                <button>Submit</button>
            </div>
        </form>
    )
}