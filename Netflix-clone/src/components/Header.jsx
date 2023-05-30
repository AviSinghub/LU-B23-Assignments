import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png';
import {useNavigate} from 'react-router-dom'

export default function Header(props) {
  const navigate = useNavigate(); 
  return (
    <Container className='flex a-center j-between'>
      <div className="logo">
        <img src={logo} alt="Netflixlogo" />
      </div>
      <button className='button' onClick={()=>navigate(props.login? "/login": "/signup")}>
        {props.login? "Login":"Signup"}
      </button>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 4rem;
  .logo{
    img{
      height :5rem;
    }
  }

  .button{
    padding:  0.5rem 1rem;
    background-color: #E50914;
    border: none;
    cursor: pointer;
    border-radius:0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
    &:hover{
      background-color: #d10a14;
      fill:currentcolor;
      transition-duration: 250ms;
      transition-property: background-color, border-color;
      transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1.2);
    }
  }
`;
