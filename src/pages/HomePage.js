import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import CardHome from "../components/CardHome";
// import {useDetailsContextConsumer} from '../Context/detailsContext';

const HomePage = () => {
  // const {details} = useDetailsContextConsumer();
  const [details, setDetails] = useState(0);
  useEffect(() => {
    const fetchDetails = () => {
      const fetchData = fetch(`https://backendtofrontend.herokuapp.com/blogdata/api`);
      fetchData
        .then(res => res.json())
        .then((res) => {
          setDetails(res);
          // console.log(res);
        });
    };
    fetchDetails();
  }, []);

  let latest = null;
  let latest2 = null;
  let latestarticles = null;
  let topposts = null;
  if(details !== undefined){
    // arrInd = () => Math.floor(Math.random() * 49);
  
  // console.log(details[Math.floor(Math.random() * 49)])
   latest = [details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)]]
  // console.log(latest);
   latest2 = [details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)]]
  // console.log(latest2)
   latestarticles = [details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)]]
  // console.log(latestarticles)
   topposts = [details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)], details[Math.floor(Math.random() * 49)]] 
  // console.log(topposts)
}
console.log(latest);
  

  return ( details && 
    <div className="home_container">
      <div className="banner-image">
        <div className="main-image" style={{}}>
          <Link className="link" to="/bollywood">
            <h1>Read bollywood's top stories.</h1>
          </Link>
        </div>
        <div className="sub-images">
          <Link to="/technology">
            <img
              src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="sub-img"
              // src={details[arrInd()].Image}
            />
          </Link>

          <Link to="/fitness">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              alt="sub-img"
            />
          </Link>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
            { latest
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                  category={n.category}
                  date={n.date}
                />
              ))}

        </div>
      </div>
      <div className="category_page">
        <div className="column_main">
          <h1 className="title head-title">Latest Article</h1>
          { latestarticles
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="sub_column">
          <h1 className="side_title title">Top Posts</h1>
          {topposts
            .map((n) => (
              <SmallCard
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title.slice(0, 25)}
                category={n.category}
                date={n.date}
                description={n.description}
              />
            ))}
            <div className="advertisements"><img src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="ads"/>
              <h4>Advertisements</h4>
          </div>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
          
            {latest2
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  date={n.date}
                  category={n.category}
                  author={n.author}
                />
              ))}
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
