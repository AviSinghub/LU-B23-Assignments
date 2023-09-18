// import {useEffect, useState} from 'react';
import React from 'react';
import BlogList from './BlogList';
import useCustomFetch from './customFetch';

const Homepage = () => {
    // const [blogs,setBlog] = useState(null);
    // const [isFetchPending,setIsFetchPending] = useState(true);
    // const [isError, setisError] = useState(null);
    
    const{datas,isFetchPending,isError} = useCustomFetch("http://localhost:8000/blogs");
    
    // const [blogs,setBlog] = useState([
        //     {title: "Farmers world",preview:"This a preview", body:"lorem ispre huha tgfa biuy estoo  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author:"Dimitri", id:"101", time:"3 hours ago" },
        //     {title: "Valorant 1",preview:"This a preview", body: "loremn sai ipsum Hiotn koie fijo Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author:"Vitalik bulterin", id:"241", time:"3 hours ago"},
        //     {title: "Etherum layer2",preview:"This a preview", body: "home lorem giodejj njidsc satieq Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author:"Sandeep", id:"254", time:"3 hours ago"},
    //     {title: "Valorant 2",preview:"This a preview", body: "loremn sai ipsum Hiotn koie fijo Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author:"Vitalik bulterin", id: "302", time:"3 hours ago"},
    //     {title: "Etherum layer2",preview:"This a preview", body: "home lorem giodejj njidsc satieq Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author:"Sandeep", id:"368", time:"3 hours ago"},
    //     {title: "Bitcoin ETF audit",preview:"This a preview", body: "hue lorem nodejj nsgsc atiq jiev uyagf uuiiy ghjs jevap Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author:"Yoloesotok", id: "577", time:"3 hours ago"},
    //     {title: "Valorant 3",preview:"This a preview", body: "loremn sai ipsum Hiotn koie fijo Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author:"Vitalik bulterin", id:"102", time:"3 hours ago"},
    //     {title: "Etherum layer2",preview:"This a preview", body: "home lorem giodejj njidsc satieq Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author:"Dinesh", id:"854", time:"3 hours ago"},
    // ]);

    // const [blogPreviewGen, setPreview] = useState("This is Blog Preview content")    //removed---

    // let id = 5 
    
    // const deleteBlog = (id) => {
    //     const newBlogs = blogs.filter( blogs => blogs.id!==id);
    //     setBlog(newBlogs);
    // }

    // Stimulate to load data after x second 
    // useEffect(() => {
    //     setTimeout(
    //         () => {
    //             fetch('http://localhost:8000/blogs')
    //             .then(responses =>{
    //                 console.log(responses);
    //                 if(!responses.ok){
    //                     throw Error('Type Error: Could not fetch data from resources!' )
    //                 }  
    //                 return responses.json();
    //             })
    //             .then(data => {
    //                console.log(data);
    //                setBlog(data);
    //                setIsFetchPending(false);
    //                setisError(null);
    //             })
    //             .catch(
    //                 err => {
    //                     setisError(err.message)
    //                     setIsFetchPending(false)
    //                     console.log(err.message);
    //                 }
    //             )
    //         },2000
    //     );
    //     },[]); 

    return(
        <div className="home">
            {/* props  */}
            {/* <BlogList blogs={blogs} title="Tech Glimpse"/>
            <BlogList blogs ={blogs.filter((blog)=>blog.author === "Vitalik bulterin")} title = "Vitalik bulterin's Blogs"/>   
            <BlogList blogs ={blogs.filter((blog)=>blog.author === "Sandeep")} title = "Sandeep's Blogs"/> */}

            {/* <BlogList blogs={blogs} title="Tech Glimpse" deleteBlog={deleteBlog}/> */}

            {/* conditional templationg for Error */}
            {isError && <div>{isError}</div> }

            {/* conditional templationg for fetch status */}
            {isFetchPending && <div>loading...</div> }


            {/* conditional templating  */}
            {/* {blogs && <BlogList blogs={blogs} title="Tech Glimpse" deleteBlog={deleteBlog}/>} */}
            {datas && <BlogList blogs={datas} title="Tech Glimpse"/>}

            {/* <p>{blogPreviewGen}</p>
            <button onClick={()=> setPreview(" Updated Preview")} >CLick to Change the Preview </button> */} 
            {/* removed ln 36 37 */}
        </div>
    );
}
 
export default Homepage; 