import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
// stateList Functional component (sfc) ----->  'Renders a bolier plate' 
const BlogList = ({blogs,title,deleteBlog}) => {
    // const buttonStyle = {margin: "25px"};
        
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h1 className="tit">{title}</h1>
            {/* using map method  */}
            {blogs.map((eblog) =>(
                <div className="blog-preview" key={eblog.id}>
                    <div className="mainup">
                        <h2 className="game-tit">{eblog.title}</h2> 
                        <button className="btnD" onClick={() => deleteBlog(eblog.id)} > <AiOutlineDelete className="icon" /> </button>
                    </div>
                    <p>{eblog.preview}</p>
                    <p>{eblog.body}</p>
                    <p className='authr'>By {eblog.author}</p>
                    <p className='timeline'>Updated: {eblog.time}</p>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;