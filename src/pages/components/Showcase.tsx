import styled from "styled-components";

const Showcase = styled.div`
  position: relative;
  color: white;
  min-height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  h1 {
    text-align: center;

    a > img {
      max-width: 30.9rem;
      max-height: 30.9rem;

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

  > img {
    z-index: 9;
  }
`;

export default Showcase;
