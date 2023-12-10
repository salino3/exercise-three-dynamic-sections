import React from 'react';
import './components-card.styles.scss';

interface Props {
  type: string | undefined;
  setComponent: React.Dispatch<React.SetStateAction<string>>;
  component: string;
};


export const ComponentsCard: React.FC<Props> = (props) => {
  const { type, setComponent, component } = props;

  const processedType: string | undefined = type && type.replace(/\s/g, '').toLowerCase();
 
  const handleClick = (type: string | undefined) => {

    switch (type) {
      case "Brakes":
        setComponent("brakes");
        break;
      case "Engine Module":
        setComponent("engineModule");
        break;
      case "Wheels":
        setComponent("wheels");
        break;
      case "Suspension Kit":
        setComponent("suspensionKit");
        break;
      case "Transmission System":
        setComponent("transmissionSystem");
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
      {processedType == component.toLowerCase() ? (
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
}

