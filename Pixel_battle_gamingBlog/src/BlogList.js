// stateList Functional component (sfc) ----->  'Renders a bolier plate' 
const BlogList = ({blogs,title}) => {    
    return ( 
        <div className="blog-list">
            <h1 className="tit">{title}</h1>
            {/* using map method  */}
            {blogs.map((eblog) =>(
                <div className="blog-preview" key={eblog.id}>
                    <h2>{eblog.title}</h2>
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