import { useState } from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { BottomSC, CardSC } from "../../styledComponents";
import Body from "./Body";
import Header from "./Header";

const constants = require("../../constants/constants.json");

const { cards_height } = constants;

interface IHeader {
  item: number;
  state: number;
  feature: string;
  measurements: [];
}

const FeatureCard = ({
  item = 0,
  state = 0,
  feature = "",
  measurements = [],
}: IHeader) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <CardSC>
      <Header state={state} feature={feature} />
      <Body
        height={isExpanded ? "max-height" : cards_height[item]}
        measurements={measurements}
        item={item}
      />
      <BottomSC onClick={toggleExpanded}>
        {isExpanded ? <GrFormClose /> : <BiDotsHorizontal />}
      </BottomSC>
    </CardSC>
  );
};

export default FeatureCard;
