import React from 'react';
import './vehicles-card.styles.scss';


interface Props {
  type: string;
  setTypeVehicle: React.Dispatch<React.SetStateAction<string>>;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
};

export const VehiclesCard: React.FC<Props> = ({ type, setTypeVehicle, setBrand }) => {

  const handleClick = (type: string) => {

    setBrand('brakes')
    setTypeVehicle(type.toLowerCase());
  }


  return (
     <li onClick={() => handleClick(type)}>
      {type}
     </li>
     );
};
