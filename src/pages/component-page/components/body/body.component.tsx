import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SwitchRouter } from '@/router';
import './body.styles.scss';

export const Body: React.FC = () => {

     const params = useParams();

  return (
    <div className="containerPage">
      <h1>
        <span className="titlePage">Vehicle</span> - <span>{params.type}</span>
      </h1>
      <h2>
        <span className="titlePage">Component</span> -{" "}
        <span>{params.component}</span>
      </h2>
      <div>
        <Link to={SwitchRouter.home}>Go back</Link>
        <h3>
          <span className="titlePageBrand">Brand</span>
          <span className="twoPoints">:&nbsp;</span> <span>{params.brand}</span>
        </h3>
      </div>
    </div>
  );
}
