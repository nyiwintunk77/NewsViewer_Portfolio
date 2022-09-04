import React from "react";
import "./Categories.css";
// import styled, { css } from "styled-components";
import { CategoriesBlock, Category } from "./CategoriesStyled.js";
import { categories } from "./CategoriesArray.js";

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          onClick={() => onSelect(c.name)}
          active={category === c.name}
        >
          {console.log(c.text)}
          <p>{c.text}</p>
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
