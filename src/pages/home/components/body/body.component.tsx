import React from 'react';
import { Section } from '../section';
import { SlideCards } from '../slide-cards';
import './body.styles.scss';

export const Body: React.FC = () => {

  return (
    <div className='root'>
      <h1>Spare Shop</h1>
        <Section />
        <SlideCards />
    </div>
  )
}
