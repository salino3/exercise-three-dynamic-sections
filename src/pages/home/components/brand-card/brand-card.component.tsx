import React from 'react';
import { SwitchRouter } from '@/router';
import './brand-card.styles.scss';

interface Props {
  url: string;
  brand: string;
  typeVehicle: string;
  component: string;
};

export const BrandCard: React.FC<Props> = (props) => {
  const {url, brand, typeVehicle, component} = props;


  return (
    <li className='liBrand'>
      <a target={url ? "_blank" : ""} href={ url ? url : `${SwitchRouter.componentPage}/${typeVehicle}/${component}/${brand}`}>{brand ? brand : ""}</a>
        <small>{url ? 'external link' : ''}</small>
    </li>
  );
}

