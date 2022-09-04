import React from "react";
import styled, { css } from "styled-components";

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  width: 768px;
  @media screen and(max-width:769px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const Category = styled.div`
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
    margin-left: 3rem;
  }
  ${(props) =>
    props.active &&
    css`
      font-wieght: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #ff0000;
      }
    `}
`;
