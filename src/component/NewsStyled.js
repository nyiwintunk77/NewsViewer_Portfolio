import React from "react";
import styled, { css } from "styled-components";

export const NewsItemBlock = styled.div`
  display: flex;
  border-radius: 15px;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      &:hover {
        color: #ff5c33;
      }
      a {
        color: black;
      }
    }
    a:visited {
      color: blue;
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 2rem;
    border-bottom: 1px dotted black;
  }
  &:nth-child(even) {
    background: #ffccff;
  }
  &:nth-child(odd) {
    background: #e8e8e8;
  }
`;

export const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 769px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width:769px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
