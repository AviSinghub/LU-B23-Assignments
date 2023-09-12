import {useState} from 'react';
import BlogList from './BlogList';
const Homepage = () => {
    const [blogs,setBlog] = useState([
        {title: "Farmers world",preview:"This a preview", body:"lorem ispre huha tgfa biuy estoo  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author: "Dimitri", id:"101", time:" 3 hours ago" },
        {title: "Valorant",preview:"This a preview", body: "loremn sai ipsum Hiotn koie fijo Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author: "Vitalik bulterin", id: "241", time:" 3 hours ago"},
        {title: "Etherum layer2",preview:"This a preview", body: "home lorem giodejj njidsc satieq Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author: "Sandeep", id: "254", time:" 3 hours ago"},
        {title: "Valorant",preview:"This a preview", body: "loremn sai ipsum Hiotn koie fijo Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author: "Vitalik bulterin", id: "302", time:" 3 hours ago"},
        {title: "Etherum layer2",preview:"This a preview", body: "home lorem giodejj njidsc satieq Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author: "Sandeep", id: "368", time:" 3 hours ago"},
        {title: "Bitcoin ETF audit",preview:"This a preview", body: "hue lorem nodejj nsgsc atiq jiev uyagf uuiiy ghjs jevap Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author: "Yoloesotok", id: "577", time:" 3 hours ago"},
        {title: "Valorant",preview:"This a preview", body: "loremn sai ipsum Hiotn koie fijo Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author: "Vitalik bulterin", id: "102", time:" 3 hours ago"},
        {title: "Etherum layer2",preview:"This a preview", body: "home lorem giodejj njidsc satieq Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quos quod illo? Consequuntur, ipsum unde.",author: "Dinesh", id: "854", time:" 3 hours ago"},
    ]);

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter( blogs => blogs.id!==id);
        setBlog(newBlogs);
    }

    return(
        <div className="home">
            {/* props  */}
            
            <BlogList blogs={blogs} title="Tech Glimpse" deleteBlog={deleteBlog}/>

            <BlogList blogs ={blogs.filter((blog)=>blog.author === "Vitalik bulterin")} title = "Vitalik bulterin's Blogs"/>   
            <BlogList blogs ={blogs.filter((blog)=>blog.author === "Sandeep")} title = "Sandeep's Blogs"/>   

            <BlogList blogs={blogs} title="Tech Glimpse" deleteBlog={deleteBlog}/>
        </div>
    );
}
 
export default Homepage; 