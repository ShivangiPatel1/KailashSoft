import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height: 50px;
`
const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-size: 40px;
    border-bottom: 2px solid red;
`
const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 480px){
        display: none;
    }
`

const MenuItem = styled.li`
    color: #4a4949;
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
`

const Button = styled.button`
    border: 2px solid white;
    border-radius: 10px;
    font-weight: bold;
    color:white;
    padding: 10px;
    background-color: crimson;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Kailash Software</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Contacts</MenuItem>
                </Menu>
            </Left>
            <Button>Join Today</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar