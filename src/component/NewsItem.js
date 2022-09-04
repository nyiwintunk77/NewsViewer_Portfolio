import React from "react";
import "./NewsItem.css";
// import styled, { css } from "styled-components";
import { NewsItemBlock } from "./NewsStyled.js";
import S from "C:/Users/User/Pictures/default1.svg";

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage !== null ? (
        <div className="thumbnail">
          <a href={url} target="blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      ) : (
        <div className="thumbnail">
          <a href={url} target="blank" rel="noopener noreferrer">
            <img src={S} alt="S" />
          </a>
        </div>
      )}

      <div className="contents">
        <a href={url} target="blank" rel="noopener noreferrer">
          <h2>{title.split("-")[0]}</h2>
        </a>

        <p>
          {description !== null &&
            (description.length > 80
              ? description.substring(0, 80) + "。。。。。"
              : description)}
          {/* {description.length} */}
        </p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
