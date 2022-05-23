const constants = require("../constants/constants.json");

const { features, variables } = constants;

interface IVariableValue {
  variable: string;
  values: {
    dev: number;
    devOut: number;
    state: number;
  };
}

const getRandomDeviation = () => {
  return Math.floor(Math.random() * 3);
};

const getVariableValues = (variable: string): IVariableValue => {
  const dev = getRandomDeviation();
  const devOut = getRandomDeviation();
  const state = Math.abs(devOut - dev);
  return {
    variable,
    values: {
      dev,
      devOut,
      state,
    },
  };
};

const getMeasurements = () => {
  const measurements: IVariableValue[] = [];
  for (let i = 0; i < 20; i++) {
    variables.forEach((variable: string) => {
      const variableValues = getVariableValues(variable);
      measurements.push(variableValues);
    });
  }
  return measurements;
};

const getFeaturesData = () => {
  let data: any = [];
  features.forEach((feature: string) => {
    const state = getRandomDeviation();
    data.push({
      feature,
      measurements: getMeasurements(),
      state,
    });
  });
  return data;
};

export { getFeaturesData };
