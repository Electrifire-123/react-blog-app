import React from 'react'
import { useLocation } from 'react-router-dom'

const ReadMorePage = () => {
    const location = useLocation();
    const {title, img, description} = location.state;
    console.log(title)
  return (
    <div className='read_more_page'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{description}</p>
    </div>
  )
}

export default ReadMorePage

