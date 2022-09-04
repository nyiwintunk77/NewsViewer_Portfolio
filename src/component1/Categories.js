import React from "react";
import "./Categories.css";
import styled, { css } from "styled-components";

const categories = [
  {
    name: "all",
    text: "全体",
  },
  {
    name: "business",
    text: "ビジネス",
  },
  {
    name: "entertainment",
    text: "エンタテイメント",
  },
  {
    name: "health",
    text: "ヘルス",
  },
  {
    name: "science",
    text: "科学",
  },
  {
    name: "sports",
    text: "スポーツ",
  },
  {
    name: "technology",
    text: "技術",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  width: 768px;
  @media screen and(max-width:769px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }
  ${(props) =>
    props.active &&
    css`
      font-wieght: 600;
      border-bottom: 2px solid #22b8cf;
      color:#22b8cf &:hover {
        color: #3bc9db;
      }
    `}
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          onClick={() => onSelect(c.name)}
          active={category === c.name}
        >
          <p>{c.text}</p>
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
