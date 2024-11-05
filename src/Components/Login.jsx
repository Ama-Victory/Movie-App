import React, { useEffect, useState } from 'react'
import {MainBody, Header, Wrapper, SignUpFrom, TextHeader,Input, Button, InputPasswordDiv, Or, FormText} from "../Auth/AuthStyle"
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOutline } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import {toast, Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const [email, setEmail]=useState()
    const [emailError, setEmailError]=useState()
    const [emailShowError, setEmailShowError]=useState(false)
    const [password, setPassword]=useState()
    const [showPassword, setShowPassword]=useState(true)
    const [clickme, setClickme] = useState(false);



    const nav = useNavigate()



    const validateEmail = (input) => {
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    };

    const handleEmailChange =(e)=>{
        const newEmail =e.target.value;
        setEmail(newEmail)

        // Validate the email
       if(newEmail.trim() ===""){
        toast.error("Email is required");
        setEmailShowError(false)
       }else if(!validateEmail(newEmail)){
        setEmailShowError(true)
        setEmailError("inavlid email format")
       }else{
        setEmailError("")
       }
    };
  
    const Signup = async () => {
      // if (!email || !password) {
      //   // toast.error("user data needed");
      // } else {
        const mydata = { email, password };
        const url = "https://classmovback.onrender.com/api/login";
        axios.post(url, mydata)
          .then((res) => {
            console.log(res);
            setClickme(false);
            toast.success("Login successful");
            // nav(`/landing/${res.data._id}`);
            // console.log(res.data._id)
            // nav(`/landing`)
          })
          .catch((err) => {
            console.log(err);
            setClickme(false);
            toast.error("Login failed");
          });
      }
    ;


    const MyShowPassword =()=>{
        setShowPassword(false)
    }

    const handlePassword =(e)=>{
        const newData =e.target.value
        setPassword(newData)
        if(newData.trim() ===""){
            toast.error("Password is required")
        }
    }
    // useEffect(()=>{
    //   Signup()
    // },[])

  return (
    <MainBody>
      <Header>
        <h4>
          Vicky<span>Movie Flex</span>
        </h4>
      </Header>
      <Wrapper>
        <SignUpFrom Hg>
          <TextHeader>
            <h3>Login In</h3>
          </TextHeader>
          <Input
            type="email"
            placeholder="email"
            hg
            br
            wd
            bg
            onChange={handleEmailChange}
          />
          {emailShowError ? (
            <p style={{ color: "red", margin: "0px", padding: "0px" }}>
              {emailError}
            </p>
          ) : null}

          <InputPasswordDiv>
            <Input
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
                  marginRight: "5PX",
                }}
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
              />
            )}
          </InputPasswordDiv>
          {/* <PassInfo>
            <span>Capital</span>
            <span>LowerCase</span>
            <span>Number</span>
            <span>Symbol</span>
          </PassInfo> */}
          <Button onClick={Signup}>Login In</Button>
          <Or>or</Or>
          <Button Bg>
            <FcGoogle />
            Login with Google
          </Button>
          <FormText hv onClick={() => nav("/ForgotPassword")}>
            Forgot Password?
          </FormText>
          <FormText>
            Do not have an account<span onClick={() => nav("/")}>Sign Up</span>
          </FormText>
        </SignUpFrom>
      </Wrapper>
      <Toaster />
    </MainBody>
  );
}

export default Login