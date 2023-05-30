import React,{useState} from 'react'
import styled from 'styled-components'

import BgImage from '../components/BgImage'
import Header from '../components/Header'
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
// importing firebase authentication to this page 
import { firebaseAuth } from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom'



export default function Login() {
  const navigate = useNavigate(); 
   
  const [formValues, setFormValues] = useState ({ email:"", password:""});
  
  // handling Login
  const handleLogIn = async () =>{
    // console.log(formValues);
    try{
      const {email,password} = formValues;
      await signInWithEmailAndPassword(firebaseAuth , email, password)
    }
    catch(err){
      console.log(err);
    }
  };

  onAuthStateChanged (firebaseAuth ,(currentUser)=>{
    if(currentUser) navigate("/");
  })
  return (
    <Container>
      <BgImage/>
      <div className="content">
        <Header/>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center jcenter">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
            <input 
                      type="email" 
                      name="email"
                      id="email" 
                      placeholder='Email address' 
                      value={formValues.email} 
                      onChange={(e) => setFormValues({
                        ...formValues,
                        [e.target.name]:e.target.value, 
                        })} />
                 
                        <input type="password" name="password" id="password" placeholder='Password' 
                        value ={formValues.password} 
                        onChange = {(e) => setFormValues({
                          ...formValues,
                          [e.target.name]:e.target.value,
                        })}
                       />
                      
                      <button onClick={handleLogIn} className='button'>LogIn</button>         
            </div>
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
    .form-container{
      gap: 2rem;
      height:85vh;
      .form{
        background-color: rgb(0,0,0,0.8);
        padding: 2rem;
        width: 25vw;
        gap: 2rem;
        color:white;
        .container{
          gap: 2rem;
          input{
            padding: 0.5rem 1rem;
            width: 15rem;
          }
        }
        .button{
          padding:  0.5rem 1rem;
          background-color: #E50914;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          color:white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
  }
`;

