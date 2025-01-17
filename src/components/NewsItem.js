import React from 'react'
import alt from "./img_alt.png" ;
const NewsItem =(props)=>{
  
   
  
   let {title ,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div>

          <div className="card" >
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className=" badge rounded-pill bg-danger" >{source} </span>
          </div>
            <img src={imageUrl?imageUrl:alt} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toLocaleDateString()}</small></p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
            </div>
          </div>

      </div>
    )
  
}

export default NewsItem