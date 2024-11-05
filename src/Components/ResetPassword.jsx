import React, { useState } from 'react'
import { MainBody, Header, Wrapper, SignUpFrom, TextHeader, InputPasswordDiv, Input, Button, FormText, PassInfo } from "../Auth/AuthStyle"
import { IoEyeOutline } from 'react-icons/io5'
import { FaEyeSlash } from 'react-icons/fa'
// import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const ResetPassword = () => {
    const [password, setPassword]=useState()
       const [showPassword, setShowPassword] = useState(true);
       const [passwordErrorlow, setPasswordErrorLow] = useState("");
       const [passwordErrorUpper, setPasswordErrorUpper] = useState();
       const [passwordErrorNumber, setPasswordErrorNumber] = useState();
       const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();
       const [passwordCheck, setPasswordCheck] = useState(false);



const MyShowPassword =()=>{
    setShowPassword(false)
}


const nav=useNavigate()


const containsLowercase = (input) => {
  // Check if the input string contains at least one lowercase character
  return /[a-z]/.test(input);
};

const containsUpperrcase = (input) => {
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
    const handlePassword =(e)=>{
        const newData =e.target.value
        setPassword(newData)
        if(newData.trim()===""){
            toast.error("password is required")
            setPasswordCheck(false)
        }if(newData.length >0){
            setPasswordCheck(true)
        }if(!containsLowercase(newData)){
            setPasswordErrorLow(true)

        }else{
            setPasswordErrorLow(false)
        }if(!containsUpperrcase(newData)){
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
     
  return (
    <MainBody>
      <Header>
        <h3>
          VICKY <span>Moviie Flex</span>
        </h3>
      </Header>
      <Wrapper>
        <SignUpFrom>
          <TextHeader>
            <h3>Reset Password</h3>
          </TextHeader>
          <InputPasswordDiv>
            <Input
              type={showPassword ? "password" : "text"}
              placeholder="New Password"
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
              {passwordErrorlow ? <span>Lowercase</span> : null}
              {passwordErrorUpper ? <span>Capital</span> : null}
              {passwordErrorNumber ? <span>Numbers</span> : null}

              {passwordErrorSymbol ? <span>Symbols</span> : null}
            </PassInfo>
          ) : null}

          <InputPasswordDiv>
            <Input
              type={showPassword ? "password" : "text"}
              placeholder="confirm password"
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
          <Button Bg  >Reset Password</Button>
          
        
          <FormText hv>
            Do not have an account? <span onClick={()=>nav("/")}>Sign Up</span>
          </FormText>
        </SignUpFrom>
      </Wrapper>
    </MainBody>
  );
}

export default ResetPassword