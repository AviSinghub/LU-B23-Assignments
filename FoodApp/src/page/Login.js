import React ,{useState} from 'react'
import {PiUser} from 'react-icons/pi'
import {BiShow, BiHide} from 'react-icons/bi'
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector} from 'react-redux';
import { loginRedux } from '../redux/userSlice';

const Login = () => {
let navigator = useNavigate()
    const [showPassword,setShowPassword] = useState(false);
    
    const handleshowPassword =()=>{
        setShowPassword(preview =>!preview); 
    }

     
    const userData = useSelector( state => state)
    console.log(userData); 

    const dispatch = useDispatch()
    


    const [credential, setCredentials] = useState({email:"",password:""})

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:5050/api/loginuser',{
            method:'POST',
            headers: {
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({ email:credential.email, password:credential.password})
        });

        const json = await response.json()
        console.log(json);

        // if(!json.success){
        //     alert("Plese enter valid credentials")
        // }

        // if(json.success){
        //     localStorage.setItem('authToken',json.authToken);
        //     console.log(localStorage.getItem('authToken'));
        //     navigator("/")
        // }

        if(json.success){
            localStorage.setItem('authToken',json.authToken);
            console.log(localStorage.getItem('authToken'));
            dispatch(loginRedux(json))
            setTimeout(()=>{
                toast.success("Welocme back! Login successful");
                navigator('/');
            },690)
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
                {/* Email  */}
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
               
                <button type='submit' className='max-w-[150px] w-full m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded text-xl font-medium py-1 pb-2 text-center mt-5 '>Login</button>
                <p className='mt-3 text-left text-sm'>Don't have an account ? <Link to={'/signup'} className='text-red-500 hover:underline'>Sign up</Link> </p>
            </form>
        </div>
    </div>
  
  )
}

export default Login