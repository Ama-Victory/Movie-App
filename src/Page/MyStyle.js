import styled from "styled-components";
// import Header from "./Header";

export const CardIcons = styled.div`
  width: 100%;
  height: 10%;
  /* gap:19px; */
   padding-left: 10px; 
  display: flex;
  /* flex-direction: column; */

 
  span {
    width: 100%;
    display: flex;
    gap: 1px;

    
  }
`;


export const CardDescription = styled.div`
  width: 100%;
  height: 15%;
  /* background-color: pink; */
  font-size: 18px;
  color: #fdffe2;
  /* background: linear-gradient(
    to bottom right,
    #f32170,
    #ff6b08,
    #cf23cf,
    #eedd44
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */
  font-family: poppings;
  /* gap:40px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* padding: 7px; */
`;
export const CardText = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  /* height: max-content; */
  /* padding: 7px; */
  font-size: 15px;
  color: #fdffe2;
  /* background: linear-gradient(
    to bottom right,
    #f32170,
    #ff6b08,
    #cf23cf,
    #eedd44
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */
  /* background-color: orange; */
`;

export const CardImageHolder=styled.div`
width: 100%;
height: 60%;
background-color: red;

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`

export const Card = styled.div`
  width: 30%;
  height: 25rem;
  gap: 7px;
  /* background: linear-gradient(
    to bottom right,
    #f32170,
    #ff6b08,
    #cf23cf,
    #eedd44
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 350ms ease-in-out;
  cursor: pointer;
  /* animation-name: slideRight;
  animation-duration: 2s;
  animation-play-state: running;
  animation-iteration-count: infinite;
  animation-direction: normal;

  @keyframes slideRight {
    to {
      transform: translateX(100%);
    }
     from{transform: translateY(100px)}  
  } */

  &:hover {
    transform: scale(0.9);
    transition: 350ms;
  }
`;



export const CardBody=styled.div`
width: 90%;
height: auto;
 /* background-color: blue;  */
display: flex;
justify-content: center;
flex-wrap:wrap;
gap:20px;


`

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  background-color: #1a2130;
  padding: 10px;
  justify-content: center;
  display: flex;
  /* align-items: center; */
`;

export const LandingPageBody = styled.div`
  width: 100%;
  background-color: #1a2130;
  height: max-content;
`;
