import React, { useEffect, useState } from 'react'
import { Button, FormText, Header, Input, MainBody, SignUpFrom, TextHeader, Wrapper } from '../Auth/AuthStyle'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {

    const[email, setEmail]=useState()
    const[emailError, setEmailError]=useState()
    const[showEmailError, setShowEmailError]=useState(false)

const validateEmail = (input) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};


    const handleEmailChange=(e)=>{
        const newEmail=e.target.value
        setEmail(newEmail);

        // validate the Email

        if(newEmail.trim()===""){
            toast.error("Email is required");
            setShowEmailError(false)
        }else if(!validateEmail(newEmail)){
            setShowEmailError(true)
            setEmailError("invalid email format")

        }else{
            setEmailError("")
        }

    };
const nav=useNavigate()

    // useEffect(()=>{
    //     setTimeout(()=>{

    //     },5000);
    // })
  return (


    <MainBody>
        <Header>
            <h3>Vicky<span>Movie Flex</span></h3>
        </Header>
        <Wrapper>
            <SignUpFrom>
                <TextHeader>
                    <h3 >Forgot Password?</h3>
                </TextHeader>
                <Input type='email' bg wd br hg onChange={handleEmailChange}/>
                {
                    showEmailError? <p style={{color:"red", margin:"0px", padding:"0px"}}>{emailError}</p>:null
                }
                <Button Bg>Submit</Button>
                <FormText>Already have an Account? <span onClick={()=>nav("/ResetPassword")}>Login</span></FormText>

            </SignUpFrom>
        </Wrapper>

    </MainBody>
  )
}

export default ForgotPassword