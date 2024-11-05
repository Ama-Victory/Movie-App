// import React, { useEffect, useState } from "react";
// import { IoEyeOutline } from "react-icons/io5";
// // import {styled}from "./AuthStyle"
// import {
//   MainBody,
//   Header,
//   Wrapper,
//   SignUpForm,
//   TextHeader,
//   Input,
// } from "../Auth/AuthStyle";

// const SignUp = () => {
//   // const [toggle, setToggle] =useState(true)
//   const [username, setUserName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [showPassword, setShowPassword] = useState();

//   const myShowPassword = () => {
//     setShowPassword(false);
//   };

//   const handlePassword = (e) => {
//     const newData = e.target.value;

//     if (newData.trim() === "") {
//       toast.error("passwor is required");
//     }
//   };

//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setToggle(false)

//   //   },5000);

//   // })
//   return (
//     <MainBody>
//       {/* {
//         toggle?
//       } */}
//       <Header>
//         Vick <span>Movie</span>
//       </Header>
//       <Wrapper>
//         <SignUpForm>
//           <TextHeader>
//             <h4>Sign Up</h4>
//           </TextHeader>
//           <Input type="username" placeholder="username" />
//           <Input type="email" placeholder="email" />
//           <IoEyeOutline />

//           <InputDiv>
//             <Input
//               type={showPassword ? "password" : "text"}
//               placeholder="password"
//             />
//           </InputDiv>
//           <PassInfo>
//             <span>lowercase</span>
//             <span>capital</span>
//             <span>number</span>
//             <span>symbol</span>
//           </PassInfo>
//           <Button>Sign up</Button>
//           <Or>or</Or>
//           <Button>Sign In</Button>
//         </SignUpForm>
//       </Wrapper>
//     </MainBody>
//   );
// };

// export default SignUp;



// when doing reset password with senior boss then for d bbanking app project

//  import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {toast, Toaster} from "react-hot-toast";
// import {
//   CreateAcct,
//   HeroDiv,
//   Logo,
//   MainBody,
//   Mainwrapper,
//   SignUpForm,
//   SignUpWrapper,
//   InputDiv,
//   Input,
//   Label,
//   Button,
// } from "../Auth/Auth";
// import { error } from "style";
// // import LogoImg from "../../assets/images/logo.png";
// const ResetPassword = () => {

//    const [email, setEmail] = useState("")
//    const [emailError, setEmailError] = useState(false)
//    const [password,setPassword] = useState("")
//    const [resetPassword,setResetPassword] = useState("")

// const handleValidation = () => {
//   let error = true;

//   if (email.trim() === "") {
//     toast.error("Email is empty");
//     setEmailError("Email is empty");
//     error = false;
//   } else if (email !== !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test) {
//     toast.error("Invalid email format");
//     setEmailError(false);
//     // error = false;
//   } else {
//     // If email is valid, reset error message
//     setEmailError("");
//   }

//   return error;
// };


//   return (
//     <MainBody>
//       <Mainwrapper>
//         <HeroDiv></HeroDiv>
//         <SignUpForm>
//           <SignUpWrapper>
//             <Logo>
//               {" "}
//               <div>{/* <img src={LogoImg} alt="" /> */}</div>{" "}
//             </Logo>
//             <CreateAcct>
//               <h2>Reset Password</h2>
//             </CreateAcct>
//             <InputDiv>
//               <Label>Email</Label>
//               <Input
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="text"
//                 placeholder="Enter email"
//                 // value={email}
//                 Hg
//               />
//               {emailError ? < p style={{color:"red"}}>{emailError}</p> : null}
//             </InputDiv>
//             <InputDiv>
//               <Label>Reset Password</Label>
//               <Input
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="Enter New Password"
//                 Hg
//               />
//             </InputDiv>
//             <InputDiv>
//               <Label>Confirm Password</Label>
//               <Input
//                 onChange={(e) => setResetPassword(e.target.value)}
//                 type="password"
//                 placeholder="Confirm New Password"
//                 Hg
//               />
//             </InputDiv>
//             <Button Bg onClick={handleValidation}>
//               Reset Password
//             </Button>
//           </SignUpWrapper>
//         </SignUpForm>
//       </Mainwrapper>
//       <Toaster />
//     </MainBody>
//   );
// };

// export default ResetPassword;
