const CblogList = ({cblogs,title,m_title}) => {
    return ( 
        <div className="cblog-list">
            <h1 className="c-tit">{title}</h1>
            <h2 className="m-tit">{m_title}</h2>
            {/* using map method  */}
            {cblogs.map((ceblog)=>(
                <div className="blog-preview" key ={ceblog.id}>
                   <h2>{ceblog.title}</h2>
                   <p>{ceblog.preview}</p> 
                   <p>{ceblog.body}</p>
                   <p className="author">By {ceblog.author}</p>
                   <p className="time">Updated: {ceblog.time}</p>
                </div>
            ))}
        </div>
     );
}
 
export default CblogList;