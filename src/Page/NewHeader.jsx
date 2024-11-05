import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewHeader = () => {
  const { userId } = useParams();
  const [useData, setUseData] = useState();

  const getData = () => {
    const url = `https://classmovback.onrender.com/api/userdata/${userId}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res?.data.data.userName);
        setUseData(res?.data.data.userName);
        // localStorage.setItem("Ama", res?.data.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <HeaderBody>
      <HeaderInner>
        <Logo>
          VickyFlex<span>Movie</span>
          <LogoDiv bg></LogoDiv>
          <LogoDiv></LogoDiv>
        </Logo>
        <NavRight>
          <Username>
            <h3>{useData}</h3>
          </Username>
          <LogOut>LogOut</LogOut>
        </NavRight>
      </HeaderInner>
    </HeaderBody>
  );
};

export default NewHeader

const LogoDiv = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  gap: 10px;
  background-color: ${({ bg }) => (bg ? "#FDFFE2;" : "#83B4FF")};
  border-radius: 20px;
`;
const Username = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-family: poppings;
  /* background: linear-gradient(to bottom right, #f32170); */

  h3 {
    /* color: orange; */
      background: linear-gradient(
      to bottom right,
      #FDFFE2,
       
      #83b4ff,
      #83b4ff
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  
`;
const LogOut = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  font-size: 30px;
  /* font-family: poppings; */
  align-items: center;

   background: linear-gradient(
      to bottom right,
      #FDFFE2,
       
      #83b4ff,
      #83b4ff
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  
`;

const NavRight=styled.div`
width: 30%;
height: 100%;
color: white;
/* background-color: red;  */
display:flex;
font: 35px;
font-weight: 600;
align-items: center;
justify-content: space-between; 

    
`

const Logo = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  font-size: 25px;
  gap: 5px;
  /* color: orange; */

    background: linear-gradient(
      to bottom right,
      #FDFFE2,
       
      #83b4ff,
      #83b4ff
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  
  /* background: linear-gradient(
    to bottom right,
    #f32170,
    #ff6b08,
    #cf23cf,
    #eedd44
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */

  span {
    font-size: 25px;
    /* color: yellow; */
    font-family: poppings;
    background: linear-gradient(
      to bottom right,
      #FDFFE2,
       
      #83b4ff,
      #83b4ff
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;

 const HeaderInner=styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
/* background-color: blue; */

    
`

 const HeaderBody = styled.div`
   width: 100%;
   height: 12vh;
   background-color: #1a2130;
   /* background-color: black; */
   display: flex;
   justify-content: center;
   align-items: center;
 `;