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

const intialFormValues={
  username:'',
  email:'',
  role:'',
}


export default function App(){
    const [teamMembers,setTeamMembers]=useState(intialTeamMembers)
    const [formValues,setFormValues]=(intialFormValues)
    return(
      <div>
        <Form/>
      </div>
    )
}