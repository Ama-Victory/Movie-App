import React, { useEffect, useState } from 'react'
// import {styled}from "./AuthStyle";

import {MainBody, Header, Wrapper, SignUpFrom, TextHeader, Input, InputPasswordDiv, Button, Or, FormText, PassInfo} from "../Auth/AuthStyle"
import { IoEyeOutline } from 'react-icons/io5';
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {toast, Toaster} from 'react-hot-toast';
import { Loading } from '../Loading';
import axios from "axios";

 import { useNavigate } from "react-router-dom";


const SignUp = () => {
const [userName, setUserName]=useState()
const [email, setEmail]=useState()
const [emailError, setEmailError]=useState()
const [emailShowError, setEmailShowError]=useState(false)
const [passWord, setPassword]=useState()
const [showPassword, setShowPassword]=useState(true)
const [passwordCheck, setPasswordCheck]=useState(false)
const [passwordErrorLow, setPasswordErrorLow]=useState("")
const [passwordErrorUpper, setPasswordErrorUpper]=useState()
const [passwordErrorNumber, setPasswordErrorNumber]=useState()
const [passwordErrorSymbol, setPasswordErrorSymbol]=useState()
const [showLoading, setShowLoading] = useState(true)
const nav=useNavigate()
const [clickme, setClickme] = useState(false);












const handleUserName =(e)=>{
  const newData=e.target.value
  setUserName(newData)
}


const validateEmail = (input) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

const handleEmailChange=(e)=>{
  const newEmail = e.target.value;
  setEmail(newEmail);

  // Validate the email
  if(newEmail.trim()===""){
    toast.error("Email is required");
    setEmailShowError(false)
  }else if(!validateEmail(newEmail)){
    setEmailShowError(true)
    setEmailShowError("invalid email format")
  }else{
    setEmailError("")
  }
};


const MyShowPassword=()=>{
  setShowPassword(false)
}

const containsLowercase = (input) => {
  // Check if the input string contains at least one lowercase character
  return /[a-z]/.test(input);
};

const containsUppercase = (input) => {
  // Check if the input string contains at least one lowercase character
  return /[A-Z]/.test(input);
};

const containsNumber = (input) => {
  // Check if the input string contains at least one number
  return /\d/.test(input);
};

const containsSymbol = (input) => {
  // Check if the input string contains at least one symbol (special character)
  return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
};

useEffect(() =>{
  setTimeout(() => {
    setShowLoading(false);
  }, 4000);
})


const handlePassword=(e)=>{
  const newData =e.target.value
  setPassword(newData)

  if(newData.trim()===""){
    toast.error("Password is required")
    setPasswordCheck(false)
  }if(newData.length > 0){
    setPasswordCheck(true)
  }if(!containsLowercase(newData)){
    setPasswordErrorLow(true)
  }else{
    setPasswordErrorLow(false)
  }if(!containsUppercase(newData)){
    setPasswordErrorUpper(true)
  }else{
    setPasswordErrorUpper(false)
  }if(!containsNumber(newData)){
    setPasswordErrorNumber(true)
  }else{
    setPasswordErrorNumber(false)
  }if(!containsSymbol(newData)){
    setPasswordErrorSymbol(true)
  }else{
    setPasswordErrorSymbol(false)
  }

}


const Api=()=>{
  if(!userName || !email || !passWord){
    toast.error("user data needed")
    setClickme(true)
  }else{
    const mydata={userName,password:passWord,email}
    const url = "https://classmovback.onrender.com/api/register";
    axios.post(url, mydata)
    .then(res =>{
      console.log(res)
      toast.success("you successfully signed in")
      setClickme(false)
    })
    .catch((err)=>{
      console.log(err)
      setClickme(false)
      toast.error("sign in failed")
    })
  }
}




  return (
    <MainBody>
      {showLoading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <h3> Vicky </h3>
            <span>MovieFlex</span>
          </Header>
          <Wrapper>
            <SignUpFrom>
              <TextHeader>
                <h3>Sign Up</h3>
              </TextHeader>
              <Input
                type="text"
                placeholder="username"
                hg
                bg
                wd
                // br
                onChange={handleUserName}
              />
              <Input
                type="email"
                placeholder="email"
                hg
                wd
                // br
                bg
                onChange={handleEmailChange}
              />

              {emailShowError ? (
                <p
                  style={{ color: "red", margin: "0px", padding: "0px" }}
                >
                  {emailError}
                </p>
              ) : null}
              <InputPasswordDiv>
                <Input
                  wd
                  // br
                  // bg
                  type={showPassword ? "password" : "text"}
                  placeholder="password"
                  onChange={handlePassword}
                />

                {showPassword ? (
                  <IoEyeOutline
                    onClick={MyShowPassword}
                    style={{
                      color: "white",
                      fontSize: "18px",
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowPassword(true)}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  />
                )}
              </InputPasswordDiv>

              {passwordCheck ? (
                <PassInfo>
                  {passwordErrorLow ? <span>lowercase</span> : null}
                  {passwordErrorUpper ? <span>capital</span> : null}
                  {passwordErrorNumber ? <span>number</span> : null}

                  {passwordErrorSymbol ? <span>symbol</span> : null}
                </PassInfo>
              ) : null}

              <Button onClick={Api}>
                {clickme ? "Loading..." : "Sign Up"}
              </Button>
              <Or>Or</Or>
              <Button Bg>
                <FcGoogle />
                Sign Up with Google
              </Button>
              <FormText hv>Forgot Password?</FormText>
              <FormText>
                Already have an account{" "}
                <span onClick={() => nav("login")}>Login In</span>
              </FormText>
            </SignUpFrom>
          </Wrapper>
        </>
      )}
      <Toaster />
    </MainBody>
  );
}

export default SignUp