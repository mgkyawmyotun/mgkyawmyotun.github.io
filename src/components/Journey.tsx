import { graphql, useStaticQuery } from 'gatsby';
import type { FC } from 'react';
import React from 'react';
import {
  journey,
  journey__bar,
  journey__cards,
} from '../scss/journey.mod.scss';
import { Card } from './Card';
export const Journey: FC = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { title: { eq: "Journey" } } }) {
        edges {
          node {
            headings {
              value
            }
          }
        }
      }
    }
  `);
  return (
    <div className={journey}>
      <h1>My Journey</h1>
      <div>
        <div className={journey__bar}>
          <div>2019</div>
          <div>2020</div>
          <div>2021</div>
        </div>
        <div className={journey__cards}>
          {data.allMarkdownRemark.edges.map((card_data) => {
            return <Card text={card_data.node.headings[0].value} />;
          })}
        </div>
      </div>
    </div>
  );
};
