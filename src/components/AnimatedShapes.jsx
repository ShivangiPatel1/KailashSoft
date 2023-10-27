import React from 'react'
import { styled } from 'styled-components'


const Sq = styled.div`
    width : 50px;
    height: 50px;
    background-color: #ffea00;
    opacity: 0.5;
    position: absolute;
    top:-50px;
    left:-50px;
    z-index: -1;
    animation: square 25s linear alternate infinite;

    @keyframes square{
        to {
            transform: translate(100vw, 100vh);
        }
    }
`

const Rectangle = styled.div`
    width : 40px;
    height: 40px;
    background-color: #00eeff;
    opacity:0.8;
    position: absolute;
    top:150px;
    left:-40px;
    z-index: -1;
    animation: rec 25s linear alternate infinite;

    @keyframes rec{
        to {
            transform: translateX(100vw);
        }
    }
`

const Circle = styled.div`
    width : 40px;
    height: 40px;
    background-color: #06fba9;
    opacity:0.8;
    border-radius: 50%;
    position: absolute;
    top:550px;
    left:-40px;
    z-index: -1;
    animation: circle 25s linear alternate infinite;

    @keyframes circle{
        to {
            transform: translate(100vw,-100vh);
        }
    }
`
const AnimatedShapes = () => {
  return (
    <>
        <Sq/>
        <Rectangle/>
        <Circle/>
    </>
  )
}

export default AnimatedShapes