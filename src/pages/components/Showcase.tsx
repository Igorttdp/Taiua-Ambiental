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

  > div {
    background-image: linear-gradient(
      180deg,
      rgba(61, 84, 48, 0.03) 8.85%,
      #47702f 27.08%,
      #FFF 100%
    );
    position: absolute;
    width: 100%;
    min-height: 100%;
    bottom: -60%;
    z-index: 2;
  }

  > video {
    object-fit: fill;
    position: absolute;

    &:first-of-type {
      z-index: 1;
      height: 100vh;
    }

    &:last-of-type {
      width: 100%;
      filter: ${({ $filter }) => $filter};
    }
  }

  h1 {
    text-align: center;

    a > img {
      position: relative;
      max-width: 30.9rem;
      max-height: 30.9rem;
      z-index: 3;
      animation: move .3s ease-in 2s forwards;

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

  @keyframes move {
    100% {
      transform: scale(0);
    }
  }
`;

export default Showcase;
