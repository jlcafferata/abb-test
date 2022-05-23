import { FcCancel, FcOk, FcMediumPriority } from "react-icons/fc";


const constants = require("../constants/constants.json");

const { state_values, color_states } = constants;

const getLimitDevMeasurementEval = (state: number) => {
  return state_values[state];
};

const getIconState = (state: number) => {
  const featureIconScoring = getLimitDevMeasurementEval(state);
  let icon = <FcCancel />;
  switch (featureIconScoring) {
    case state_values[0]:
      icon = <FcOk />;
      break;
    case state_values[1]:
      icon = <FcMediumPriority />;
      break;
  }

  return icon;
};

const getColorState = (state: number) => {
  return color_states[state];
};

export { getIconState, getColorState };
