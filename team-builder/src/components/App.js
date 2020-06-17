import React ,{useState} from 'react';
import {v4 as uuid} from 'uuid'
import Form from './Form'

const intialTeamMembers=[
      {
        id:uuid(),
        name:'Lilith',
        email:'superNatural@spn.com',
        role:'Designer',
      },
      {
        id:uuid(),
        name:'Keith',
        email:'AnimeCon@name.com',
        role:'RolePlayer',
      },
      {
        id:uuid(),
        name:'Alexander',
        email:'Hamilton@musical.com',
        role:'Writer',
      }
]



export default function App(){
    const [teamMembers,setTeamMembers]=useState('')
    return(
      <div>
        <Form/>
      </div>
    )
}