import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import { store } from "../components/Details";
import CardHome from "../components/CardHome";

const HomePage = () => {
  const [detail] = useContext(store);

  return (
    <div className="home_container">
      <div className="banner-image">
        <div className="main-image">
          <Link className="link" to="/bollywood">
            <h1>Have We Got News For You.</h1>
          </Link>
        </div>
        <div className="sub-images">
          <Link to="/technology">
            <img
              src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="sub-img"
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
          <div className="rows">
            {detail
              .filter((article) => {
                return article.category === "bollywood";
              })
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
          <div className="rows">
            {detail
              .filter((article) => {
                return article.category === "technolgy";
              })
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                  date={n.date}
                  category={n.category}

                />
              ))}
          </div>
          <div className="rows">
            {detail
              .filter((article) => {
                return article.category === "fitness";
              })
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
      </div>
      <div className="category_page">
        <div className="column_main">
          <h1 className="title head-title">Latest Article</h1>
          {detail
            .filter((article) => {
              return article.category === "Latest";
            })
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
          {detail
            .filter((article) => {
              return article.category === "Top";
            })
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
          Seo tool for free get it now
          </div>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
          <div className="rows">
            {detail
              .filter((article) => {
                return article.category === "Latest-bottom1";
              })
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                />
              ))}
          </div>
          <div className="rows">
            {detail
              .filter((article) => {
                return article.category === "Latest-bottom2";
              })
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                />
              ))}
          </div>
          <div className="rows">
            {detail
              .filter((article) => {
                return article.category === "Latest-bottom3";
              })
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
