import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    const{imgUrl, title, description, articleId} = props;
  return (
    <NavLink className='link' state={{title: title, img: imgUrl, description: description, id: articleId}} to={`article/${articleId}`}>
        <div className={articleId} >
            <div className='card_main'>
                <div className='card_img'>
                    <img src={imgUrl} alt= "News-data"/>
                </div>
                <div className='card_details'>
                    <h3>{title}</h3>
                    <p>{description}...</p>
                </div>
            </div>
            
        </div>
    </NavLink>
    )
}

export default Card