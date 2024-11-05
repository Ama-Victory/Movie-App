import styled from "styled-components";
import Bg from "../assets/NetFlix.jpg"



export const PassInfo = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    color: rgba(224, 215, 215, 0.968);
  }
`;



export const FormText =styled.div`
width: 100%;
height: 20px;
display: flex;
color:lightgray;
justify-content: flex-end;
gap:2px;
cursor: pointer;
transition: all 350ms ease in;


&:hover{
    text-decoration: ${({hv})=>(hv? "underline": "none")};
}

span{
    color:red;

    &:hover{
        text-decoration: underline;
    }
}



`
export const Or = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(229, 226, 226);
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: ${({Bg}) => (Bg ? "red" : "rgba(162, 162, 162, 0.342)")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: all 350ms ease in;
  gap: 10px;

  &:hover {
    background: ${({Bg}) =>
      Bg ? "rgb(177, 2, 2)" : "rgba(162, 162, 162, 0.657)"};
  }
`;

export const InputPasswordDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgba(128, 128, 128, 0.375);
  /* background-color: gray; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none;
  border: none;
  border-radius: 2px;
  gap: 10px;
`;

export const Input = styled.input`
  width: ${({ wd }) => (wd ? "100%" : "90%")};
  height: ${({hg})=> (hg? "60px":"90%")};
  background-color: ${({ bg }) =>
    bg ? "rgba(128, 128, 128, 0.375)" : "transparent"};

  gap: 10px;
  
  display: flex;
  border-radius: 5px;
  padding-left: 10px;
  border: ${({ br }) => (br ? "1px solid gray" : "none")};
  color: white;
  outline: none;
`;

export const TextHeader= styled.div`
width: 100%;
height: 10%;
display: flex;
margin-bottom: 10px;
justify-content: center;

h3{
    font-size: 30px;
    color: white;
    font-weight: 500;

}

`

export const SignUpFrom =styled.div`
width: 20%;
height: 70%;
background-color: black;
display: flex;
padding: 30px;
gap:15px;
flex-direction: column;
`

export const Wrapper =styled.div`
width: 100%;
height: 90%;
/* background-color: white; */
display: flex;
align-items: center;
justify-content: center;
`



export const Header = styled.div`
  width: 100%;
  height: 100px;
  color: black;
  gap: 10px;
  display: flex;
  color: #FDFFE2;

  /* background: linear-gradient(to bottom right, #fdffe2, #83b4ff, #83b4ff);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */

  /* background: linear-gradient(
    to bottom right,
    #f32170,
    #ff6b08,
    #cf23cf,
    #eedd44
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-family: poppings; */
  font-size: 30px;

  span {
    font: 20px;
    /* background: linear-gradient(
      to bottom right,
      #f32170,
      #ff6b08,
      #cf23cf,
      #eedd44
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; */
    /* color: orange; */
    background: linear-gradient(to bottom right, #fdffe2, #83b4ff, #83b4ff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;

export const MainBody = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: pink;
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.432), rgba(0, 0, 0, 0.623)),
    url(${Bg});
  /* align-items: center; */
  /* justify-content: center; */
`;