import React from 'react';
import './brand-card.styles.scss';

interface Props {
  url: string;
  brand: string;
};

export const BrandCard: React.FC<Props> = (props) => {
  const {url, brand} = props;


  return (
    <li>
      <a href={url}>{brand ? brand : ""}</a>
    </li>
  );
}

