import React from 'react'

export default function Form(props){
    const{
        values,
        onInputChange,
        onSubmit,
    }=props

    return(
        <form >


            <label>Username:&nbsp;</label>
            <label>Email:&nbsp;</label>
            <label>Role:&nbsp;</label>
        </form>
    )
}