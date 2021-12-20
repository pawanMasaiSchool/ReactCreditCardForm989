import styled from "styled-components";

const TypeOfCardWrapper = styled.img`
  width: 120px;
  height: 90px;
  float: right;
  position: relative;
  top: 0px;
  right: 15px;
`;
const TypeOfCard = ({ src }) => {
  return <TypeOfCardWrapper src={src}></TypeOfCardWrapper>;
};

const ChipCSS = styled.img`
  width: 120px;
  height: 90px;
  float: left;
  position: relative;
  top: 20px;
  left: 30px;
`;
const Chip = ({ src }) => {
  return <ChipCSS src={src}></ChipCSS>;
};

const CardNumber = styled.div`
  /* border: 1px solid black; */
  color: #ffffff;
  font-size: 25px;
  width: 380px;
  margin: auto;
  height: auto;
  float: left;
  margin-top: 40px;
  position: relative;
  top: 10px;
  left: 40px;
`;
const CardHolderINFO = styled.div`
  /* border: 1px solid black; */
  color: #ffffff;
  font-size: 12px;
  width: 81px;
  margin: auto;
  height: auto;
  float: left;
  margin-top: 40px;
  position: relative;
  left: 50px;
  margin-left: 25px;
`;
const Answers = styled.div`
  /* border: 1px solid black; */
  color: #ffffff;
  font-size: 19px;
  font-weight: 700;
  width: 90px;
  margin: auto;
  height: auto;
  float: left;
  margin-top: 10px;
  position: relative;
  left: 40px;
  margin-left: 25px;
`;

function Card() {
  return (
    <>
      <Chip src="https://cdn.iconscout.com/icon/premium/png-256-thumb/credit-card-chip-1522324-1288446.png"></Chip>
      <TypeOfCard src="https://cdn.freebiesupply.com/logos/large/2x/visa-logo-black-and-white.png"></TypeOfCard>
      <CardNumber>4256 7890 5678 4532</CardNumber>
      <CardHolderINFO>CARD HOLDER</CardHolderINFO>
      <CardHolderINFO>EXPIRY</CardHolderINFO>
      <CardHolderINFO>CVV</CardHolderINFO>
      <div style={{ display: "flex", float: "left" }}>
        <Answers>Pawan Sukhwani</Answers>
        <Answers>09/20</Answers>
        <Answers>345</Answers>
      </div>
    </>
  );
}

export default Card;
