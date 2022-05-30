import React from 'react'
import { Link } from 'react-router-dom'

const SmallCard = (props) => {
  const { imgUrl, title, description, articleid, category, date} = props;
  return (
    <Link className='link' state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`article/${articleid}`}>
      <div className='sub_card' >
        <div className="card_data" >
          <div className="card_images">
            <img src={imgUrl} alt="data not found" />
          </div>
          <div className='small_card_data'  >
            <h4>{title} .....</h4>
            <p><span>{category}</span>/{date}</p>
          </div>
        </div>
      </div>
      </Link>
  )
}

export default SmallCard