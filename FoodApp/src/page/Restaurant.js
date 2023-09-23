import React, { useState }  from 'react'
import {RiUploadCloud2Fill} from 'react-icons/ri'
import { ImagetoBase64 } from '../utils/ImagetoBase64'
import { toast } from 'react-hot-toast';

const Restaurant = () => {

  const [restoCredential, setRestoCredential] = useState({name:"",category:"", image:"",price:"", description:""})

  // const uploadImage = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setRestoCredential({...restoCredential, image:selectedImage});

  //   // read file as base64 
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     setRestoCredential({
  //       ...restoCredential,
  //     image:event.target.result
  //     });      
  //   };
  //   reader.readAsDataURL(selectedImage);
  // };



  const uploadImage = async(e)=>{
    const restoCredential = await ImagetoBase64(e.target.files[0])
    console.log(restoCredential); 
    setRestoCredential((previous) => {
      return{
        ...previous,
        image:restoCredential
      }
    })
  }
  

  const handleOnChange = (e)=>{
    setRestoCredential({...restoCredential,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(JSON.stringify({name:restoCredential.name, category:restoCredential.category, image:restoCredential.image, price:restoCredential.price, description:restoCredential.description}))
    
    const response = await fetch('http://localhost:5050/api/creatfood',{
            method:'POST',
            headers: {
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({name:restoCredential.name, category:restoCredential.category, image:restoCredential.image, price:restoCredential.price, description:restoCredential.description})
        });

        const json = await response.json()
        console.log(json);
        
        if(json.success){
          toast.success("upload successfully!");
        }else{
          toast.error('Please enter valid credentials')
        }
  }

  // required code here **
  // required code here **
  // required code here **


  return (
    <div className='p-4 '>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-5 bg-white' onSubmit={handleSubmit}>
        <label  htmlFor="name">Name</label>
        <input type={"text"} name ="name" className=' bg-slate-200 p-1 my-1'
        onChange={handleOnChange}
        value={restoCredential.name}/>

        <label htmlFor="category">Category</label>
        <select name='category' id='category' className=' bg-slate-200 p-1 my-1' 
        onChange={handleOnChange}
        value={restoCredential.category}>
          <option value={"others"}>Select category</option>
          <option value={"chicken"}>Chicken</option>
          <option value={"cerals"}>Rice</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"shawarma"}>Shawarma</option>
          <option value={"burger"}>Burger</option>
          <option value={"kebab"}>Kebab an rolls</option>
          <option value={"meals"}>Meals</option>
          <option value={"dessert"}>Dessert</option>
          <option value={"chinese"}>Chinese</option>
          <option value={"tacos"}>Tacos</option>
          <option value={"mutton-biryani"}>Mutton Biryani</option>
          <option value={"butter-naan"}>Butter Naan</option>
        </select>

        <label htmlFor="image">Image
          <div className='h-40 w-full bg-zinc-200 cursor-pointer rounded flex items-center justify-center'>
            
            {
              restoCredential.image ? <img src={restoCredential.image} alt='' className="h-full"/> :<span className='text-5xl'><RiUploadCloud2Fill/></span>
            }
            
            <input name='file' type={"file"} accept='image/*' id='image' onChange={uploadImage} className='hidden'
            />
          </div>
        </label>

        <label htmlFor="price" className='my-1'>Price</label>
        <input name='price' id='price' type={"text"} className='bg-slate-200 p-1 my-1' 
        onChange={handleOnChange} 
        value={restoCredential.price}/>

        <label htmlFor="description">Description</label>
        <textarea name="description" rows={2}  className='bg-slate-200 resize-none'
        onChange={handleOnChange}
        value={restoCredential.description}></textarea>
        <button type='submit' className='bg-red-400 hover:bg-red-500 text-white text-lg font-semibold drop-shadow my-4 mr-16 ms-16 rounded-sm'>Save</button>
      </form>
    </div>
  )
}

export default Restaurant