import {
  BodySC,
  BodyContentSC,
  BodyContainerSC,
  RowItemSC,
  RowSC,
  RowTitleSC,
} from "../../styledComponents";
import { getIconState } from "../../utils/measurementUtils";

interface IBody {
  measurements: [];
  height: string;
  item: number;
}

const renderTitle = () => {
  return (
    <RowSC>
      {["Control", "Dev", "Dev Total", ""].map((title, index) => (
        <RowTitleSC key={`row_title_${index}`} item={index}>
          {title}
        </RowTitleSC>
      ))}
    </RowSC>
  );
};

const renderRows = (rows: []) => {
  return (
    (rows || []).length > 0 &&
    rows.map((measurement: any, index) => {
      const { variable = "", values: { dev = 0, devOut = 0 } = {} } =
        measurement || {};
      return (
        <RowSC key={`row_${index}`}>
          {[variable, dev, devOut, getIconState(devOut)].map((value, index) => (
            <RowItemSC key={`row_item_${index}`} item={index}>
              {value}
            </RowItemSC>
          ))}
        </RowSC>
      );
    })
  );
};

const renderBodyContent = (rows: []) => {
  return (
    <BodyContentSC>
      <>
        {renderTitle()}
        {renderRows(rows)}
      </>
    </BodyContentSC>
  );
};

const Body = ({ measurements = [], height = "", item = 0 }: IBody) => {
  let firstColumn = measurements;
  let secondColumn: any = [];
  if (item === 0 && measurements.length > 0) {
    const middleIndex = measurements.length / 2;
    firstColumn = measurements.slice(0, middleIndex) as [];
    secondColumn = measurements.slice(middleIndex) as [];
  }

  return (
    <BodySC height={height}>
      <BodyContainerSC>
        {renderBodyContent(firstColumn)}
        {secondColumn.length > 0 && renderBodyContent(secondColumn)}
      </BodyContainerSC>
    </BodySC>
  );
};

export default Body;
