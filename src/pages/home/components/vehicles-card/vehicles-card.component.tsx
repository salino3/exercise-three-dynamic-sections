import React from 'react';
import './vehicles-card.styles.scss';


export const VehiclesCard: React.FC<{type: string}> = ({type}) => {

  return (
    <li>
      {
        type
      }
    </li>
  )
}
