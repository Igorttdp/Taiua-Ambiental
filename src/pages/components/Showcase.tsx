import styled from "styled-components";

interface IShowcaseProps {
  $filter: string;
}

const Showcase = styled.div<IShowcaseProps>`
  position: relative;
  color: white;
  min-height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  > div:not(#fade) {
    display: flex;
    flex-flow: column nowrap;
    gap: 10rem;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    @media (max-width: 840px) {
      gap: 5rem;
    }

    > div {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 1.2rem;

      @media (max-width: 425px) {
        padding: 1rem;

        > button {
          width: 100%;
        }
      }
    }
  }

  h1 {
    text-align: center;

    a > img {
      position: relative;
      max-width: 30.9rem;
      max-height: 30.9rem;
      z-index: 3;

      @media (max-width: 840px) {
        width: 75%;
        height: fit-content;
      }
    }
  }

  > span {
    text-align: center;
    font-size: clamp(2.8rem, 4vw, 3.2rem);
    font-weight: 700;
    z-index: 9;
  }

  > a {
    z-index: 9;
  }

  #fade {
    width: 100%;
    height: 15vh;
    background: linear-gradient(180deg, transparent 0%, #47702F 100%);
    position: absolute;
    bottom: -1%;
    z-index: 9999;
  }

  @keyframes move {
    100% {
      transform: scale(0);
    }
  }
`;

export default Showcase;
