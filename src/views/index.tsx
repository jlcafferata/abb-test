import { useEffect, useState } from "react";
import FeatureCard from "../components/feature/FeatureCard";
import { getFeatures } from "../services";
import { ColumnSC } from "../styledComponents";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeOut = !data.length ? 0 : 10000;
    const timer = setTimeout(() => {
      getFeatures().then((response: any) => {
        setData(response);
      });
    }, timeOut);
    return () => clearTimeout(timer);
  }, [data]);

  const renderFeatureCard = (item: number) => {
    if (data.length >= item) {
      const { feature, measurements, state } = data[item];
      return (
        <FeatureCard
          item={item}
          feature={feature}
          measurements={measurements}
          state={state}
        />
      );
    }
    return null;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {(data || []).length > 0 && (
        <>
          <ColumnSC width="40%">{renderFeatureCard(0)}</ColumnSC>
          <ColumnSC>
            <>
              {renderFeatureCard(1)}
              {renderFeatureCard(2)}
            </>
          </ColumnSC>
          <ColumnSC>
            <>
              {renderFeatureCard(3)}
              {renderFeatureCard(4)}
            </>
          </ColumnSC>
          <ColumnSC>
            <>{renderFeatureCard(5)}</>
          </ColumnSC>
        </>
      )}
      {!data && <>Loading</>}
    </div>
  );
};

export default Main;
