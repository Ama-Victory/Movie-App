import React from 'react'
import Header from '../Header/Header'
import {LandingPageBody,Wrapper,CardBody, Card, CardImageHolder, CardText, CardDescription, CardIcons} from "../Page/MyStyle"
import { useNavigate, useParams } from 'react-router-dom'
import NewHeader from './NewHeader'
import { FaHeart} from 'react-icons/fa'
import { IoStar } from "react-icons/io5";
import { BsFillBookmarkHeartFill, BsFillBookmarkStarFill } from "react-icons/bs";
import NewData from "../Page/NewData.json"


const LandingPage = () => {
const { userId } = useParams();
     const Data= Object.values(NewData)
     console.log("this is my new data", Data )


    const nav=useNavigate()
  return (
    <div>
      <LandingPageBody>
        <NewHeader />
        <Wrapper>
          <CardBody>
            {Data?.map((e) => (
              <Card>
                <CardImageHolder
                  onClick={() => nav(`/detailed/${e.title}/${userId}`)}
                >
                  <img src={e?.cardImg} alt="" />
                </CardImageHolder>
                <CardText>{e.title}</CardText>
                <CardDescription>{e.description}</CardDescription>
                <CardIcons>
                  <span>
                    <FaHeart style={{ color: "#FDFFE2" }} size={20} />
                  </span>
                  <span>
                    <BsFillBookmarkHeartFill
                      style={{ color: "#FDFFE2" }}
                      size={20}
                    />
                  </span>
                  <span>
                    <IoStar size={20} style={{ color: "#FDFFE2" }} />
                  </span>
                </CardIcons>
              </Card>
            ))}
          </CardBody>
        </Wrapper>
      </LandingPageBody>
    </div>
  );
}

export default LandingPage