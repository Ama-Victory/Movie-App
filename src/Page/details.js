import styled from "styled-components";


export const WatchBtn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  color: white;

  /* gap: 20PX; */
  background-color:red;
  cursor: pointer;
  /* background-color: #83b4ff; */
  font-size: 15px;
  font-weight: 700;
  font-family: poppings;
`;

export const ButtonSide=styled.div`
height: max-content;
width: 100%;
display: flex;
justify-content: end;
`

export const MoviesDes = styled.div`
  font-size: 35px;
  font-family: poppings;
  color:#FDFFE2;
   /* background: linear-gradient(
    to bottom right,
    #f32170,
    #ff6b08,
    #ffff,
    #ffff
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */
   /* color: white;  */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const MoviesTitle = styled.div`
  font-size: 40px;
  /* color: white; */
  display: flex;
  align-items: center;
  color: #FDFFE2;
  /* background: linear-gradient(
    to bottom right,
    #f32170,
    #ff6b08,
    #cf23cf,
    #eedd44
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */
  /* color: white; */

  /* background-color: blue; */
`;

export const TextSec=styled.div`
width: 70%;
height: 100%;
background-color: transparent;
display: flex;

flex-direction: column;
`

export const ImgSec=styled.div`
width: 30%;
height: 100%;
background-color: gray;
img{
    width: 100%;
    height: 100%;
    background-repeat:no-repeat repeat;
    background-size: cover;
    /* object-fit: fit; */
}

`


export const  DetailWrapper=styled.div`
width: 80%;
height: 80%;
display: flex;
/* flex-direction: column; */
/* background: #000; */
border-radius: 10px;
 box-shadow:1px 1px 5px gray; 
gap:20px;
padding: 20px;
/* background-color: rgba(109, 104, 104, 0.6); */


`

export const DetailsBody=styled.div`
width: 100%;
height: 100vh;

background-color: transparent;
display: flex;
gap:10px;
flex-direction: column;
align-items: center;
/* justify-content: center; */
    
`