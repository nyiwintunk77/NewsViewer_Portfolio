import React, { useEffect, useState } from "react";
import { NewsListBlock } from "./NewsStyled.js";
import NewsItem from "./NewsItem.js";
// import styled, { css } from "styled-components";
import axios from "axios";

const NewsList = ({ category, namesearch }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const responseData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=jp${query}&apiKey=33a625a6d51b42e49d5bd3076f9331c5`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    responseData();
  }, [category]);

  if (loading) {
    return (
      <div
        style={{
          color: "blue",
          margin: "200px auto",
          width: "100px",
          height: "100px",
          borderRadius: "100%",
          fontSize: "30px",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!articles) {
    return null;
  }

  const searchResult = articles.filter((article) => {
    return (
      (article.title && article.title.indexOf(namesearch) !== -1) ||
      (article.description && article.description.indexOf(namesearch) !== -1)
    );
  });

  return (
    <NewsListBlock>
      {console.log(articles)}
      {searchResult.map((article) => {
        return <NewsItem key={article.url} article={article} />;
      })}
    </NewsListBlock>
  );
};

export default NewsList;
