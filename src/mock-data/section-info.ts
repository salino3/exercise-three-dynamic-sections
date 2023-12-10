export interface Vehicle {
  types: string[];
  car: Component;
  moto: Component;
  bicycle: Component;
}

export interface Component {
  types: string[];
  wheels: Brand[];
  transmissionSystem: Brand[];
  suspensionKit: Brand[];
  brakes: Brand[];
  engineModule?: Brand[];
}

export interface Brand {
  [key: string]: string;
}


//

export const vehicles: Vehicle = {
  types: ["Car", "Moto", "Bicycle"],
  car: {
    types: [
      "Brakes",
      "Engine Module",
      "Wheels",
      "Suspension Kit",
      "Transmission System",
    ],
    brakes: [
      { url: "https://www.brembo.com/en", brand: "Brembo" },
      { url: "", brand: "EBC Brakes" },
      { url: "", brand: "Hawk Performance" },
      { url: "https://www.grupo-bosch.es", brand: "Bosch" },
      { url: "", brand: "Wilwood" },
    ],
    engineModule: [
      { url: "", brand: "MotorCorp" },
      { url: "https://www.powerhouseracing.com", brand: "Powerhouse Engines" },
      { url: "", brand: "Velocity Motors" },
      { url: "", brand: "TurboMax" },
      { url: "", brand: "ForceDrive" },
    ],
    wheels: [
      {
        url: "https://www.pirelli.com/tyres/es-es/coche/home",
        brand: "Pirelli",
      },
      { url: "", brand: "Michelin" },
      { url: "", brand: "Continental" },
      { url: "", brand: "Bridgestone" },
      { url: "https://www.goodyear.eu/es_es/consumer.html", brand: "Goodyear" },
    ],
    suspensionKit: [
      { url: "", brand: "RideMaster" },
      { url: "", brand: "Bilstein" },
      { url: "", brand: "KW Suspensions" },
      { url: "https://www.koni.com/Cars/Products", brand: "KONI" },
    ],
    transmissionSystem: [
      { url: "https://www.shiftech.eu/en/reprogramming", brand: "ShiftTech" },
      { url: "", brand: "GearMasters" },
      { url: "", brand: "QuickShift Transmissions" },
      { url: "", brand: "TorqueDrive" },
      { url: "", brand: "PrecisionShift" },
    ],
  },
  moto: {
    types: [
      "Brakes",
      "Engine Module",
      "Wheels",
      "Suspension Kit",
      "Transmission System",
    ],
    brakes: [
      { url: "", brand: "Brembo" },
      { url: "", brand: "EBC Brakes" },
      { url: "", brand: "Hawk Performance" },
      { url: "https://www.grupo-bosch.es", brand: "Bosch" },
      { url: "", brand: "Wilwood" },
    ],
    engineModule: [
      { url: "", brand: "MotorCorp" },
      { url: "https://www.powerhouseracing.com", brand: "Powerhouse Engines" },
      { url: "", brand: "Velocity Motors" },
      { url: "", brand: "TurboMax" },
    ],
    wheels: [
      { url: "", brand: "Pirelli" },
      { url: "", brand: "Michelin" },
      { url: "https://www.continental-neumaticos.es/", brand: "Continental" },
      { url: "", brand: "Bridgestone" },
      { url: "", brand: "Goodyear" },
    ],
    suspensionKit: [
      { url: "", brand: "RideMaster" },
      { url: "", brand: "Bilstein" },
      { url: "", brand: "KW Suspensions" },
      { url: "", brand: "Öhlins" },
      { url: "https://www.koni.com/Cars/Products", brand: "KONI" },
    ],
    transmissionSystem: [
      { url: "https://www.shiftech.eu/en/reprogramming", brand: "ShiftTech" },
      { url: "", brand: "GearMasters" },
      { url: "", brand: "QuickShift Transmissions" },
      { url: "", brand: "TorqueDrive" },
      { url: "", brand: "PrecisionShift" },
    ],
  },
  bicycle: {
    types: ["Brakes", "Wheels", "Suspension Kit", "Transmission System"],
    brakes: [
      { url: "", brand: "Brembo" },
      { url: "", brand: "EBC Brakes" },
      { url: "", brand: "Hawk Performance" },
      { url: "https://www.grupo-bosch.es", brand: "Bosch" },
      { url: "", brand: "Wilwood" },
    ],
    wheels: [
      {
        url: "https://www.pirelli.com/tyres/es-es/coche/home",
        brand: "Pirelli",
      },
      { url: "", brand: "Michelin" },
      { url: "", brand: "Continental" },
      { url: "", brand: "Goodyear" },
    ],
    suspensionKit: [
      { url: "", brand: "RideMaster" },
      { url: "", brand: "Bilstein" },
      { url: "", brand: "KW Suspensions" },
      { url: "", brand: "Öhlins" },
      { url: "https://www.koni.com/Cars/Products", brand: "KONI" },
    ],
    transmissionSystem: [
      { url: "https://www.shiftech.eu/en/reprogramming", brand: "ShiftTech" },
      { url: "", brand: "QuickShift Transmissions" },
      { url: "", brand: "PrecisionShift" },
    ],
  },
};
