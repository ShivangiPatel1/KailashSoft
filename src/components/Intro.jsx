import React from 'react'
import { styled } from 'styled-components'
import Person from '../img/Person.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc (100vh - 50px);
    padding:20px;
    display: flex;

    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding:150px 60px;

    @media only screen and (max-width: 480px){
        width: 100%;
        height: 100%;
    }
`

const Twrapper = styled.div`
    width:100%;
    margin-top:10px;
`
const Title = styled.h1`
    font-size: 60px;
    width: 80%;
    @media only screen and (max-width: 480px){
        width: 100%;
        font-style: 50px;
    }
`
const Desc = styled.p`
    width:60%;
    font-size: 20px;
    font-weight: bold;
    color:#474646;

    @media only screen and (max-width: 480px){
        width: 100%;
    }
`
const Info = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 480px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Contact = styled.div`
    width:60%;
`
const Phone = styled.h1`
    color: crimson;
    @media only screen and (max-width: 480px){
        font-size: 15px;
    }
`
const ContactText = styled.p`
    color:#000;
    font-size: 25px;
    @media only screen and (max-width: 480px){
        font-size: 15px;
    }
`

const Right = styled.div`
    width: 50%;
    height: 100%;
    @media only screen and (max-width: 480px){
        display: none;
    }
`
const Image = styled.img`
    width:100%;
    height: 100%;
    margin-top:45%;
    margin-left:5%;
    @media only screen and (max-width: 480px){
        display: none;
    }
`
const Intro = () => {
  return (
    <Container>
            <Left>
                <Twrapper>
                    <Title>Research, Architect <br/> and Develop</Title>
                    <Desc>Design and develop products to help your business grow fast </Desc>
                </Twrapper>
                <Info>
                    <Contact>
                        <Phone>Call Us at 604 111 222</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={Person}></Image>
            </Right>
            <AnimatedShapes/>
            
    </Container>
  )
}

export default Intro