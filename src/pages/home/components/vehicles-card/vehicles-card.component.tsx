import React from 'react';
import './vehicles-card.styles.scss';


interface Props {
  type: string;
  setTypeVehicle: React.Dispatch<React.SetStateAction<string>>;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  typeVehicle: string;
};

export const VehiclesCard: React.FC<Props> = (props) => {
  const { type, setTypeVehicle, setBrand, typeVehicle } = props;

  const handleClick = (type: string) => {

    setBrand('brakes')
    setTypeVehicle(type.toLowerCase());
  };


  return (
    <li className="liVehicles" onClick={() => handleClick(type)}>
      {type}
      {type.toLowerCase() == typeVehicle ? (
        <div style={{ width: "20px", height: "20px" }}>
          <svg
            className="iconPc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
          <svg
            className="iconMobile"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(90)"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};
