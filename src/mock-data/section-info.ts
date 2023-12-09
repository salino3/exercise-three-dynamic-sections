export interface Vehicle {
  types: string[];
  car: Component;
  moto: Component;
  bicycle: Component;
}

export interface Component {
  types: string[];
  wheel: Brand[];
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
      "Suspencion Kit",
      "Transimission System",
    ],
    brakes: [
      { url: "#", brand: "Brembo" },
      { url: "#", brand: "EBC Brakes" },
      { url: "#", brand: "Hawk Performance" },
      { url: "#", brand: "Bosch" },
      { url: "#", brand: "Wilwood" },
    ],
    engineModule: [
      { url: "#", brand: "MotorCorp" },
      { url: "#", brand: "Powerhouse Engines" },
      { url: "#", brand: "Velocity Motors" },
      { url: "#", brand: "TurboMax" },
      { url: "#", brand: "ForceDrive" },
    ],
    wheel: [
      { url: "#", brand: "Pirelli" },
      { url: "#", brand: "Michelin" },
      { url: "#", brand: "Continental" },
      { url: "#", brand: "Bridgestone" },
      { url: "#", brand: "Goodyear" },
    ],
    suspensionKit: [
      { url: "#", brand: "RideMaster" },
      { url: "#", brand: "Bilstein" },
      { url: "#", brand: "KW Suspensions" },
      { url: "#", brand: "KONI" },
    ],
    transmissionSystem: [
      { url: "#", brand: "ShiftTech" },
      { url: "#", brand: "GearMasters" },
      { url: "#", brand: "QuickShift Transmissions" },
      { url: "#", brand: "TorqueDrive" },
      { url: "#", brand: "PrecisionShift" },
    ],
  },
  moto: {
    types: [
      "Brakes",
      "Engine Module",
      "Wheels",
      "Suspencion Kit",
      "Transimission System",
    ],
    brakes: [
      { url: "#", brand: "Brembo" },
      { url: "#", brand: "EBC Brakes" },
      { url: "#", brand: "Hawk Performance" },
      { url: "#", brand: "Bosch" },
      { url: "#", brand: "Wilwood" },
    ],
    engineModule: [
      { url: "#", brand: "MotorCorp" },
      { url: "#", brand: "Powerhouse Engines" },
      { url: "#", brand: "Velocity Motors" },
      { url: "#", brand: "TurboMax" },
    ],
    wheel: [
      { url: "#", brand: "Pirelli" },
      { url: "#", brand: "Michelin" },
      { url: "#", brand: "Continental" },
      { url: "#", brand: "Bridgestone" },
      { url: "#", brand: "Goodyear" },
    ],
    suspensionKit: [
      { url: "#", brand: "RideMaster" },
      { url: "#", brand: "Bilstein" },
      { url: "#", brand: "KW Suspensions" },
      { url: "#", brand: "Öhlins" },
      { url: "#", brand: "KONI" },
    ],
    transmissionSystem: [
      { url: "#", brand: "ShiftTech" },
      { url: "#", brand: "GearMasters" },
      { url: "#", brand: "QuickShift Transmissions" },
      { url: "#", brand: "TorqueDrive" },
      { url: "#", brand: "PrecisionShift" },
    ],
  },
  bicycle: {
    types: [
      "Brakes",
      "Wheels",
      "Suspencion Kit",
      "Transimission System",
    ],
    brakes: [
      { url: "#", brand: "Brembo" },
      { url: "#", brand: "EBC Brakes" },
      { url: "#", brand: "Hawk Performance" },
      { url: "#", brand: "Bosch" },
      { url: "#", brand: "Wilwood" },
    ],
    wheel: [
      { url: "#", brand: "Pirelli" },
      { url: "#", brand: "Michelin" },
      { url: "#", brand: "Continental" },
      { url: "#", brand: "Goodyear" },
    ],
    suspensionKit: [
      { url: "#", brand: "RideMaster" },
      { url: "#", brand: "Bilstein" },
      { url: "#", brand: "KW Suspensions" },
      { url: "#", brand: "Öhlins" },
      { url: "#", brand: "KONI" },
    ],
    transmissionSystem: [
      { url: "#", brand: "ShiftTech" },
      { url: "#", brand: "QuickShift Transmissions" },
      { url: "#", brand: "PrecisionShift" },
    ],
  },
};
