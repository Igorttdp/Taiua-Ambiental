import styled from "styled-components";

const VirtuesContainer = styled.div`
  max-width: 1660px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 8rem;

  > img {
    mix-blend-mode: multiply;
  }

  @media (max-width: 1300px) {
    justify-content: center;
  }

  @media (max-width: 800px) {
    > img {
      width: 100%;
      height: max-content;
    }
  }

  @media (max-width: 600px) {
    padding: 8rem 4vw;
  }

  > div {
    width: 60rem;
    min-height: 48rem;
    padding: 5rem 3.8rem;
    text-align: center;
    border: 4px solid #5e943e;
    border-radius: 3rem;

    @media (max-width: 425px) {
    padding: 5rem 6vw;
  }

    > h2 {
      font-size: clamp(3.8rem, 4vw, 4.8rem);
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }

    > p {
      font-size: 2rem;
      text-align: justify;
    }
  }
`;

export default VirtuesContainer;
