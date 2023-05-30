import React,{useState} from 'react'
import styled from 'styled-components'

import BgImage from '../components/BgImage'
import Header from '../components/Header'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
// importing firebase authentication to this page 
import { firebaseAuth } from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState ({ email:"", password:""});
  
  // handling SignIn 
  const handleSignIn = async () =>{
    // console.log(formValues);
    try{
      const {email,password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth , email, password)
    }
    catch(err){
      console.log(err);
    }
  };

  onAuthStateChanged (firebaseAuth ,(currentUser)=>{
    if(currentUser) navigate("/");
  })
  return (
     <Container showPassword = {showPassword}>

        <BgImage/>
        <div className="content">
          <Header/>
          <div className="body flex column ">
            <div className="text flex column  a-center  j-center  ">
                  <h1>Unlimited movies, Tv shows and more</h1>
                  <h4>Watch anywhere. Cancel anytime</h4>
                  <h6>Ready to watch? Enter your email to create or start membership</h6>

                  <div className="form">
                      <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder='Email address' 
                      value={formValues.email} 
                      onChange={(e) => setFormValues({
                        ...formValues,[e.target.name]:e.target.value })} />
                      {
                        showPassword && 
                        (<input 
                          type="password" 
                          name="password" 
                          id="password" 
                          placeholder='Password' 
                          value ={formValues.password} 
                          onChange = {(e) => setFormValues({
                            ...formValues,[e.target.name]:e.target.value})} />) 
                      }
                      
                      {
                        !showPassword && (<button onClick={()=> setShowPassword(true)} className='button'>Get Started</button>)
                      }
                      
                  </div>
                  <button className='button' onClick={handleSignIn}>Signup</button>
            </div>
          </div>
        </div>   
    </Container>
  )
}
const Container = styled.div `
position: relative;
  .content{
    position: absolute;
    height: 100vh;
    width:100vw;
    display:grid;
    grid-template-rows: 15vh 70vh;
    top : 0;
    left: 0;
    background-color: rgb(0,0,0,0.4);

    .body{
      gap: 1rem;
      
      .text{ 
        gap: 1rem;
        text-align: center;
        font-size: 1rem;
        h1{
          padding: 0 25rem;
        }
      }
      .form{
        display: grid;
        grid-template-columns: ${({showPassword}) => showPassword ? "1fr 1fr": "2fr 1fr"};
        width: 60%;
        input{
          color: black;
          border: none;
          border-radius:0.25rem;
          padding: 1rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus{
            outline: none;
          }
        }
        .button{
          margin-left: 0.25rem;
          padding:  0.5rem 1rem;
          background-color: #E50914;
          border: none;
          color: white;
          border-radius:0.25rem;
          cursor: pointer;
          // border-radius: 0;
          font-weight: bolder;
          font-size: 1.05rem;
        }  
      }
      .button{
        padding:  0.5rem 1rem;
        background-color: #E50914;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        color: white;
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
    }
  } 
`;
