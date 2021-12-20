import "./styles.css";
import Card from "./Components/Card";
import styled from "styled-components";

const CardWrapper = styled.div`
  /* border: 5px solid pink; */
  border-radius: 18px;
  width: 450px;
  margin: auto;
  height: 300px;
  background: rgb(255, 20, 98);
`;

export default function App() {
  return (
    <div className="App">
      <CardWrapper>
        <Card></Card>
      </CardWrapper>
    </div>
  );
}
