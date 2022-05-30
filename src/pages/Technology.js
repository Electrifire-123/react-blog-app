import React, { useContext } from "react";
import Card from "../components/Card";
import { store } from "../components/Details";
import SmallCard from "../components/SmallCard";
const Technology = () => {
  const [detail] = useContext(store);
  return (
    <div className="category_page fitness_container">
      <div className="column_main">
        <h1 className="head- title">Technology</h1>

        {detail
          .filter((article) => {
            return article.category === "Technology";
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
            return article.category === "Technology";
          })
          .map((n) => (
            <SmallCard
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title.slice(0, 25)}
              category={n.category}
              description={n.description}
              date={n.date}
            />
          ))}
          <div className="advertisements"><img src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"  alt="ads"/>
          Seo tool for free get it now
          </div>
      </div>
    </div>
  );
};

export default Technology;
