import React from 'react';
import './components-card.styles.scss';

interface Props {
  type: string | undefined;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
};


export const ComponentsCard: React.FC<Props> = (props) => {
  const {type, setBrand} = props;

  const handleClick = (type: string | undefined) => {

    
    switch (type) {
      case "Brakes":
        setBrand("brakes");
        break;
      case "Engine Module":
        setBrand("engineModule");
        break;
      case "Wheels":
        setBrand("wheel");
        break;
      case "Suspencion Kit":
        setBrand("suspensionKit");
        break;
      case "Transimission System":
        setBrand("transmissionSystem");
        break;

      default:
        setBrand("brakes");
        break;
     };
    };

  return (
    <li onClick={() => handleClick(type)}>
      {
       type ? type : ''
      }
    </li>
  )
}

