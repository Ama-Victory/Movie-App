import React, { useState } from 'react'
import "./form.css"

export const Form = () => {
    const [Username, setUserName] =useState()
    const [password, setPassword] =useState()
    const [email, setEmail] =useState()
    const [errmsg, setErrMsg] =useState()

    console.log(errmsg)

    const getUserName =(e)=>{
        const newUserName =e.target.value
        
        setUserName(newUserName)


        if(newUserName.trim() ===""){
            setErrMsg("input your username")
        }
        else{
            setErrMsg("")

            if(newUserName.length <8){

            }
        }

    }



  return (
    <div className="FormBody">
      <div className="FormWrapper">
        <div className="FormLeft"></div>
        <div className="FormRight">
          <h4>Create an account</h4>
          <form>
            <input type="text" placeholder="Username" onChange={getUserName} />
            <p>{errmsg}</p>

            <input type="password" placeholder="Password" />
            <p>{errmsg}</p>

            <input type="email" placeholder="Email" />
            <p>{errmsg}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
