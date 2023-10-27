import React from 'react'
import { styled } from 'styled-components'
import Desktop from '../img/Desktop.jpg'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
    position: relative;
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 45%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;

    @media only screen and (max-width: 480px){
        width:100%;
    }
`
const Image = styled.img`
    width: 120%;
    height: 100vh;
`
const Right = styled.div`
    width: 45%;
    height:100vh;

    
    @media only screen and (max-width: 480px){
        display: none;
    }

`
const Title = styled.span`
    color:#FFF;
    font-size:70px;
    @media only screen and (max-width: 480px){
        font-size: 40px;
        font-weight: bold;
    }
`
const Desc = styled.p`
    width:60%;
    color:#1b1818;
    font-size: 20px;
    margin-top: 20px;

    @media only screen and (max-width: 480px){
        font-size: 20px;
    }
`
const Button = styled.button`
    background-color: darkblue;
    color:white;
    margin-top: 20px;
    padding:10px;
    width: 150px;
    font-size: 15px;
    letter-spacing: 2px;
    border-radius: 20px;
`

const Features = () => {
  return (
    <Container>
        <Left>
            <Title>
            <b>Good</b> design
            <br />
            <b>Good</b> business
            </Title>
            <Desc>
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials that communicate clearly, achieve
            marketing goals, and look fantastic.
            </Desc>
            <Desc>
            We care your business and guarantee you to achieve marketing goals.
            </Desc>
            <Button>Learn More</Button>   
        </Left>
        <Right> 
            <Image src={Desktop}></Image>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Features