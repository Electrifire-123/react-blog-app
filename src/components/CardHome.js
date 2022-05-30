import React from 'react'
import { NavLink} from 'react-router-dom';

const CardHome = (props) => {
    const { imgUrl, title, description, articleId, date, category } = props;
    return (
        <NavLink className='link' state={{ title: title, img: imgUrl, description: description, id: articleId, date: date, category:category }} to={`article/${articleId}`}>
          <div className={articleId}>
            <div className="card__Home" >
              <div className='card__image'>
                <img src={imgUrl} alt="img not found" />
              </div>
              <div className='home__bigcard__data'  >
                <h3 >{title}</h3>
                <p><span>{category}</span>/{date}</p>              
              </div>
            </div>
            
          </div></NavLink>
    )
          
}

export default CardHome;