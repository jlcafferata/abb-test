import React from "react";
import { getColorState, getIconState } from "../../utils/measurementUtils";

import { HeaderSC, TitleSC, IconTitle } from "../../styledComponents";

interface IHeader {
  state: number;
  feature: string;
}

const Header = ({ state = 0, feature = "" }: IHeader) => {
  return (
    <HeaderSC backgroundColor={getColorState(state)}>
      <TitleSC>{feature}</TitleSC>
      <IconTitle>{getIconState(state)}</IconTitle>
    </HeaderSC>
  );
};

export default Header;
