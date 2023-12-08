import React from 'react';
import './section.styles.scss';

export const Section: React.FC = () => {

  return (
    <section className="root">
      <div className="container">
        <div className="box box1">
          <div className="titleBox1">
            <h2>Title</h2>
            <hr />
          </div>
          <div className="contentBox1">
            <div className='contentBox1ListBox'>
              <ul>
                <li>Cars</li>
                <li>Moto</li>
                <li>Bicycle</li>
              </ul>
            </div>
            <hr />
            <div className='contentBox1BoxImg'>
                <div>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.ts7Z47lH2BgWERfV7QOxTQHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                alt="car"
                />
                </div>
            </div>
          </div>
        </div>
        <div className="box box2"></div>
        <div className="box box3"></div>
      </div>
    </section>
  );
}
