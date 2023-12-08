import React from "react";
import "./section.styles.scss";

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
            <div className="contentBox1ListBox">
              <ul>
                <li>Cars</li>
                <li>Moto</li>
                <li>Bicycle</li>
              </ul>
            </div>
            <hr />
            <div className="contentBox1BoxImg">
              <div>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.ts7Z47lH2BgWERfV7QOxTQHaEo&pid=Api&rs=1&c=1&qlt=95&w=157&h=98"
                  alt="car"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="box box2">
          <div className="contentBox2">
            <ul>
              <li>Element 1</li>
              <li>Element 2</li>
              <li>Element 3</li>
              <li>Element 4</li>
              <li>Element 5</li>
            </ul>
          </div>
        </div>
        <div className="box box3">
          <div className="contentBox3">
            <ul>
              <li>
                <a href="#">Element 1</a>
              </li>
              <li>
                <a href="#">Element 2</a>
              </li>
              <li>
                <a href="#">Element 3</a>
              </li>
              <li>
                <a href="#">Element 4</a>
              </li>
              <li>
                <a href="#">Element 5</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
