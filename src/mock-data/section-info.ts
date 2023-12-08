export interface Vehicle {
  types: string[];
  car: Component;
  moto: Component;
  bicyle: Component;
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
  types: [
    'Cars',
    'Motos',
    'Bicyles'
  ],
  car: {
    types: [
      "Brecks",
      "Engine Module",
      "Wheels",
      "Suspencion Kit",
      "Transimissin System",
    ],
    brakes: [
      { brembo: "Brembo" },
      { ebc: "EBC Brakes" },
      { hawk: "Hawk Performance" },
      { bosch: "Bosch" },
      { wilwood: "Wilwood" },
    ],
    engineModule: [
      { motorCorp: "MotorCorp" },
      { powerhouse: "Powerhouse Engines" },
      { velocity: "Velocity Motors" },
      { turboMax: "TurboMax" },
      { forceDrive: "ForceDrive" },
    ],
    wheel: [
      { pirelli: "Pirelli" },
      { michelin: "Michelin" },
      { continental: "Continental" },
      { bridgestone: "Bridgestone" },
      { goodyear: "Goodyear" },
    ],
    suspensionKit: [
      { rideMaster: "RideMaster" },
      { bilstein: "Bilstein" },
      { kw: "KW Suspensions" },
      { ohlins: "Öhlins" },
      { koni: "KONI" },
    ],
    transmissionSystem: [
      { shiftTech: "ShiftTech" },
      { gearMasters: "GearMasters" },
      { quickShift: "QuickShift Transmissions" },
      { torqueDrive: "TorqueDrive" },
      { precisionShift: "PrecisionShift" },
    ],
  },
  moto: {
    types: [
      "Brecks",
      "Engine Module",
      "Wheels",
      "Suspencion Kit",
      "Transimissin System",
    ],
    brakes: [
      { brembo: "Brembo" },
      { ebc: "EBC Brakes" },
      { hawk: "Hawk Performance" },
      { bosch: "Bosch" },
      { wilwood: "Wilwood" },
    ],
    engineModule: [
      { motorCorp: "MotorCorp" },
      { powerhouse: "Powerhouse Engines" },
      { velocity: "Velocity Motors" },
      { turboMax: "TurboMax" },
      { forceDrive: "ForceDrive" },
    ],
    wheel: [
      { pirelli: "Pirelli" },
      { michelin: "Michelin" },
      { continental: "Continental" },
      { bridgestone: "Bridgestone" },
      { goodyear: "Goodyear" },
    ],
    suspensionKit: [
      { rideMaster: "RideMaster" },
      { bilstein: "Bilstein" },
      { kw: "KW Suspensions" },
      { ohlins: "Öhlins" },
      { koni: "KONI" },
    ],
    transmissionSystem: [
      { shiftTech: "ShiftTech" },
      { gearMasters: "GearMasters" },
      { quickShift: "QuickShift Transmissions" },
      { torqueDrive: "TorqueDrive" },
      { precisionShift: "PrecisionShift" },
    ],
  },
  bicyle: {
    types: [
      "Brecks",
      "Wheels",
      "Suspencion Kit",
      "Transimissin System",
    ],
    brakes: [
      { brembo: "Brembo" },
      { ebc: "EBC Brakes" },
      { hawk: "Hawk Performance" },
      { bosch: "Bosch" },
      { wilwood: "Wilwood" },
    ],
    wheel: [
      { pirelli: "Pirelli" },
      { michelin: "Michelin" },
      { continental: "Continental" },
      { bridgestone: "Bridgestone" },
      { goodyear: "Goodyear" },
    ],
    suspensionKit: [
      { rideMaster: "RideMaster" },
      { bilstein: "Bilstein" },
      { kw: "KW Suspensions" },
      { ohlins: "Öhlins" },
      { koni: "KONI" },
    ],
    transmissionSystem: [
      { shiftTech: "ShiftTech" },
      { gearMasters: "GearMasters" },
      { quickShift: "QuickShift Transmissions" },
      { torqueDrive: "TorqueDrive" },
      { precisionShift: "PrecisionShift" },
    ],
  },
};
