import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'
import Movielogo from '../assets/homeTitle.webp' 

function Netflix() {
 const [isScrolled, setIsScrolled] = useState(false);

 window.onscroll = () => {
   setIsScrolled(window.pageYOffset === 0 ? false: true);
   return () => (window.onscroll = null)
 }
  return (
    <Container>
      <Navbar isScrolled = {isScrolled}/>
      <div className="hero">
        <img 
          src={backgroundImage}
          className='background-image' 
          alt="bgImage" />
      </div>
    </Container>
  )
}
const Container = styled.div``;
export default Netflix;