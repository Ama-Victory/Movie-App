import React from 'react'
import NewHeader from './NewHeader'
import {DetailsBody, DetailWrapper, ImgSec, TextSec, MoviesTitle, MoviesDes, ButtonSide, WatchBtn }from "../Page/details"
import { useNavigate, useParams } from 'react-router-dom'
import NewData from "../Page/NewData.json"

const Detail = () => {
    const Data = Object.values(NewData);
    const { id, userId } = useParams();
    // const myId = localStorage.getItem("Ama")
    console.log(id)
     const filteredNewJson=Data.filter(e=>e.title ==id)

     const IndexofData=filteredNewJson[0]
     console.log(IndexofData)


    console.log("this is my new data", Data);


    const nav=useNavigate()
  return (
    <DetailsBody style={{ background: `url(${IndexofData.backgroundImg})` }}>
      <NewHeader />
      <DetailWrapper>
        <WatchBtn onClick={() => nav(`/landing/${userId}`)}>Back</WatchBtn>
        <ImgSec>
          <img src={IndexofData.cardImg} alt="" />
        </ImgSec>

        <TextSec>
          <MoviesTitle>{IndexofData.title}</MoviesTitle>
          <MoviesDes>{IndexofData.description}</MoviesDes>
          <ButtonSide>
            <WatchBtn NB>Watch Later</WatchBtn>
            {/* <WatchBtn NB>Play</WatchBtn> */}
          </ButtonSide>
        </TextSec>
      </DetailWrapper>
    </DetailsBody>
  );
}

export default Detail


