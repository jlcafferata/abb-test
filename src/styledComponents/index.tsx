import styled from "styled-components";

const ColumnSC = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "25%"};
`;

const CardSC = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const HeaderSC = styled.header<{ backgroundColor: string }>`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
`;

const TitleSC = styled.div`
  display: flex;
  padding: 1rem 1rem;
  margin: 0.5rem 0;
  width: 85%;
  font-weight: bolder;
  color: white;
  text-transform: uppercase;
`;

const BodySC = styled.section<{ height: string }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #cccccc;
  height: ${(props) => props.height};
  overflow-y: auto;
`;

const BodyContentSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BodyContainerSC = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowSC = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const RowItemSC = styled.div<{ item?: number }>`
  display: block;
  padding: 0.5;
  margin: 0.1rem;
  width: 100%;
  float: right;
  text-align: ${(props) => (props.item === 0 ? "left" : "right")};
`;

const RowTitleSC = styled(RowItemSC)`
  font-weight: bold;
`;

const BottomSC = styled(RowSC)`
  font-weight: bolder;
  background-color: lightgrey;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const IconTitle = styled.div`
  display: flex;
  align-self: center;
  border: 2px solid white;
  border-radius: 10px;
  margin-right: 1rem;
  background-color: white;
`;

export {
  ColumnSC,
  CardSC,
  HeaderSC,
  TitleSC,
  BodySC,
  BodyContainerSC,
  BodyContentSC,
  RowSC,
  RowItemSC,
  RowTitleSC,
  BottomSC,
  IconTitle,
};
