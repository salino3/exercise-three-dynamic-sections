import React from 'react';
import './components-card.styles.scss';

interface Props {
  type: string | undefined;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  brand: string;
};


export const ComponentsCard: React.FC<Props> = (props) => {
  const { type, setBrand, brand} = props;

  const processedType: string | undefined = type && type.replace(/\s/g, '').toLowerCase();
 
  const handleClick = (type: string | undefined) => {

    switch (type) {
      case "Brakes":
        setBrand("brakes");
        break;
      case "Engine Module":
        setBrand("engineModule");
        break;
      case "Wheels":
        setBrand("wheels");
        break;
      case "Suspension Kit":
        setBrand("suspensionKit");
        break;
      case "Transmission System":
        setBrand("transmissionSystem");
        break;

      default:
        break;
    };
                
};

  return (
    <li 
     className='liComponents'
     onClick={() => handleClick(type)}>
      {type ? type : ""}
      {processedType == brand.toLowerCase() ? (
        <div style={{ width: "20px", height: "20px" }}>
          <svg
            className="iconPc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
}

