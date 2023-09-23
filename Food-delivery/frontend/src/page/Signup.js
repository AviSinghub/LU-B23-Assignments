import React, { useState } from 'react';
import {PiUser} from 'react-icons/pi'
import {BiShow, BiHide} from 'react-icons/bi'
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Signup() {
let navigate = useNavigate()   
    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    

    const handleshowPassword =()=>{
        setShowPassword(preview =>!preview); 
    }
    const handleShowConfimPassword= ()=>{
        setShowConfirmPassword(trigger =>!trigger)
    }

    // const handleOnChange =(e)=>{
    //     const{name,value} = e.target
    //     setCredential((prev)=>{
    //         return{
    //             ...prev,
    //             [name]: value
    //         }
    //     })
    // }

    // const handleSubmit =(e)=>{
    //     e.preventDefault()
    //     const{name, email, password,confirmPassword} = credential
    //     if(name && email && password &&confirmPassword){
    //         if(password === confirmPassword){
    //             alert("sucessfully logged ")
    //         }
    //         else{
    //             alert("password and confirm pasword shuld be same.")
    //         }
    //     }
    //     else(
    //         alert("Please enter required fields")
    //     )
    // }
    

    const [credential, setCredentials] = useState({name:"",email:"",password:"", mobile:""})

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(JSON.stringify({name:credential.name, email:credential.email, password:credential.password, mobile:credential.mobile}))
        const response = await fetch('http://localhost:5050/api/creatuser',{
            method:'POST',
            headers: {
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({name:credential.name, email:credential.email, password:credential.password, mobile:credential.mobile})
        });

        const json = await response.json()
        console.log(json);

        

        // if(!json.success){
        //     alert("Plese enter valid credential")
        // }
        
        // if(json.success){
        //     toast.success("Signup successful!");
        //     setTimeout(()=>{})
        //     navigate("/")
        // }else{
        //     toast.error("Please enter valid credentials")
        // }

        if(json.success){
            toast.success("Signup successful!");
            setTimeout(()=>{
                navigate('/');
            },2000)
        }else{
            toast.error('Please enter valid credentials')
        }
    }


    const handleOnChange =(e)=>{
        setCredentials({...credential,[e.target.name]:e.target.value})
    }


    return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-slate-300 m-auto flex items-center flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
            <div className= "w-18 overflow-hidden text-6xl rounded-full drop-shadow-md shadow-md">
                <PiUser className='w-full'/>
            </div>

            {/* form screen  */}
            <form className=' w-full py-5 flex flex-col' onSubmit={handleSubmit}>
            
                <label htmlFor="name">Name</label>
                <input type={"text"} name="name" id="name" className='w-full bg-slate-100 mt-1 mb-2 px-1 py-1 rounded focus-within:outline-indigo-500'
                value={credential.name}
                onChange={handleOnChange}/>

                <label htmlFor="email">Email</label>
                <input type={"email"} name="email" id="email" className='w-full bg-slate-100 mt-1 mb-2 px-1 py-1 rounded  focus-within:outline-indigo-500'
                value={credential.email}
                onChange={handleOnChange}/>

                {/* password  */}
                <label htmlFor="password">Password</label>
                <div className='flex px-2 py-1 bg-slate-100 rounded mt-1 mb-2 focus-within:outline focus-within:outline-indigo-500 '>
                    <input type= {showPassword  ?"text":  "password"} name='password' id='password'className='w-full border-none outline-none' 
                    value={credential.password}
                    onChange={handleOnChange}/>
                    <span className='flex text-xl cursor-pointer' onClick={handleshowPassword}>{showPassword ?<BiShow/> : <BiHide/>}</span>
                </div>
                {/* confirm password  */}
                <label htmlFor="confirmpassword">Confirm Password</label>
                <div className='flex px-1 py-1 bg-slate-100 rounded mt-1 mb-2 focus-within:outline  focus-within:outline-indigo-500 '>
                    <input type= {showConfirmPassword  ?"text": "password"} name='confirmPassword' id='confirmpassword'className='w-full border-none outline-none'
                    value={credential.confirmPassword}
                    onChange={handleOnChange}/>
                    <span className='flex text-xl cursor-pointer' onClick={handleShowConfimPassword}>{showConfirmPassword ?<BiShow/> : <BiHide/>}</span>
                </div>
                
                <label htmlFor="mobile">Mobile Number</label>
                <input type="Number"id='mobile' name='mobile' className='w-full bg-slate-100 mt-1 mb-2 px-1 py-1 rounded  focus-within:outline-indigo-500'
                value={credential.phone}
                onChange={handleOnChange}/>
                <button type='submit' className='max-w-[150px] w-full m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded text-xl font-medium py-1 pb-2 text-center mt-5 '>Sign up</button>
                <p className='mt-3 text-left text-sm'>Already a user ? <Link to={'/login'} className='text-red-500 hover:underline'>Login</Link> </p>
            </form>
        </div>
    </div>
  )
}

export default Signup