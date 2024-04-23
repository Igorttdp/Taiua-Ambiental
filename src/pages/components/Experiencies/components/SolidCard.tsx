import styled from "styled-components";
import { Fira_Sans } from "next/font/google";

const SolidCardContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 38.6rem;
  height: 30rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 6rem;
  border-radius: 1.2rem;
  overflow: hidden;
  position: relative;

  > h3 {
    font-weight: bold;
    font-size: 2rem;
  }

  > p {
    font-size: 1.6rem;
    text-align: justify;
  }

  > .line {
    width: 3px;
    height: 300px;
    background: linear-gradient(180deg, #5e943e 0%, #2a8ecc 100%);
    transform: rotate(-15deg);
    position: absolute;

    &:first-of-type {
      left: 10px;
      bottom: -60px;
    }

    &:last-child {
        top: -20px;
      right: 10px;
      transform: scale(-1) rotate(-15deg);
    }
  }
`;

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const SolidCard = () => {
  return (
    <SolidCardContainer>
      <h3>Sustentabilidade</h3>
      <p className={fira.className}>
        Temos o cuidado de oferecer uma hospedagem que proporcione uma maior
        conscientização sobre a importância do bioma Cerrado.
      </p>

      <div className="line"></div>
      <div className="line"></div>
    </SolidCardContainer>
  );
};

export default SolidCard;
