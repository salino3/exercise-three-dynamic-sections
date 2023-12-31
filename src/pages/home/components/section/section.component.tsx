import React from "react";
import { vehicles } from "@/mock-data/section-info";
import { VehiclesCard } from "../vehicles-card";
import { ComponentsCard } from "../components-card";
import { BrandCard } from "../brand-card";
import "./section.styles.scss";

export const Section: React.FC = () => {

  const [typeVehicle, setTypeVehicle] = React.useState<string>('car');
  const [component, setComponent] = React.useState<string>('brakes')


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
                {vehicles &&
                  vehicles.types.map((type: string, index: number) => (
                    <VehiclesCard
                      typeVehicle={typeVehicle}
                      setTypeVehicle={setTypeVehicle}
                      setBrand={setComponent}
                      key={index}
                      type={type}
                    />
                  ))}
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
              {vehicles &&
                // @ts-ignore
                vehicles[typeVehicle ? typeVehicle : "car"].types.map(
                  (item: string, index: number) => (
                    <ComponentsCard
                      key={index}
                      setComponent={setComponent}
                      type={item ? item : ""}
                      component={component}
                    />
                  )
                )}
            </ul>
          </div>
        </div>
        <div className="box box3">
          <div className="contentBox3">
            <ul>
              {vehicles &&
                // @ts-ignore
                vehicles[typeVehicle ? typeVehicle : "car"]
                 [component ? component : "brakes"].map((item: { url: string; brand: string }, index: number) => (
                  <BrandCard
                    typeVehicle={typeVehicle}
                    component={component}
                    key={index}
                    url={item?.url}
                    brand={item?.brand ? item?.brand : ""}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
