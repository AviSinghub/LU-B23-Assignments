import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import {FaSearch, FaPowerOff} from 'react-icons/fa';
import {signOut} from 'firebase/auth';
import {firebaseAuth} from '../utils/firebase-config.js';



export default function Navbar(isScrolled) {

    // creating  search  State 
    const [showSearch, setShowSearch] = useState(false);

    // creating  inputHover State 
    const [inputHover, setInputHover] = useState(false);

    const links = [
        {name: 'Home', links: '/'},
        {name: 'Tv Shows', links: '/tv'},
        {name: 'Movies', links: '/movies'},
        {name: 'Recently Added', links: '/recent'},
        {name: 'My List', links: '/mylist'},
    ];


  return (
    <Container>
        <nav className={`${isScrolled ? "scrolled": ""} flex`}>

            <div className="left flex a-center">
                
                <div className="brand flex a-center j-center">
                    <img src= {Logo} alt="Netflix" />
                </div>
                <ul className='links flex'>
                    {links.map(({name,link}) => {
                        return(
                            <li key = {name} >
                                <Link to={link}>{name}</Link>
                            </li>
                        );
                    } )}
                </ul>
                
            </div>

            <div className="right flex a-center">
                <div className={`${showSearch ? "show-search": ""}search`} >
                    <button
                        onFocus = {()=> {setShowSearch(true)}}
                        onBlur = {() => {
                            if(!inputHover){
                                setShowSearch(false)
                            }
                        }}
                    >
                    <FaSearch/> 
                    </button>
                    <input 
                        type="text"
                        name= "Search"
                        id="Search"
                        placeholder='Search'
                        onMouseEnter= {()=>setInputHover(true)}
                        onMouseLeave= {()=> setInputHover(false)}
                        onBlur={
                            ()=>{
                                setShowSearch(false);
                                setInputHover(false);
                            }}
                    />

                    <button
                        onClick={()=> signOut(firebaseAuth)}
                    >
                        <FaPowerOff/>
                    </button>
                </div>

            </div>
        </nav>
    </Container>
  )
}
const Container = styled.div`
    .scrolled{
        background: tranparent;
    }
    nav{
        position: fixed;
        top: 0;
        height: 6.8rem;
        width:100%;
        justify-content: space-between;
        padding: 0 4rem;
        align-items: center;
        z-index:2;
        transition: 0.3s ease-in-out;
        .left{
            gap: 2rem;
            .brand{
                img{
                    height: 4rem;
                    width: 9.25rem;
                }
            }
            .links{
                list-style: none;
                gap: 2rem;
        
                li{
                    a{
                        color: white;
                        text-decoration: none;
                    }
                }
            }    
        }
        .right{
            gap: 1rem;
            button{
                background-color: transparent;
                border: none;
                cursor: pointer;
                &:focus{
                    outline: none;
                }
                svg{
                    color:white;
                    font-size:1.2rem;
                }
            }
            .search{
                display: flex;
                gap: 0.4rem;
                align-items: center;
                padding: 0.2rem 0.2rem 0.2rem 0.5rem;
                .button{
                    background-color: transparent;
                    border: none;
                    cursor: p;
                    &:focus{
                        outline: none;
                    }
                    svg{
                        color:white;
                        font-size:1.2rem;
                    }
                }
    
                input{
                    width: 0;
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.3s ease-in-out;
                    background-color: transparent;
                    border: none;
                    color: white;
                    &:focus{
                        outline: none;
                    }
                }
                
            }
            .show-search{
                border: 1px solid white ;
                background-color: rgba(0, 0, 0, 0.6);
                input{
                    width: 100%;
                    opacity: 0;
                    visibility: visible;
                    padding: 0.3rem;
                }
            }
            
        }

    }

    
    
`;