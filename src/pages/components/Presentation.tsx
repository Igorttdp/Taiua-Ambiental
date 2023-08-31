import styled from "styled-components";

const Presentation = styled.div`
  position: sticky;
  top: 16rem;
  max-width: 1200px;
  padding: 0 5rem 6rem;
  margin: 0 auto;
  color: white;
  overflow: hidden;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 840px) {
    display: grid;
    justify-items: center;
    justify-content: center;
    gap: 6rem;
  }

  > div {
    &:nth-child(1) {
      display: flex;
      flex-flow: column nowrap;
      gap: 10rem;

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

    &:nth-child(2) {
      position: relative;
      > img {
        transform: rotate(-90deg);

        position: absolute;

        &:nth-child(2) {
          left: -30rem;
          bottom: 15rem;
          z-index: -1;
        }

        &:nth-child(3) {
          top: 0;
          right: -4rem;
          transform: scaleX(-1) rotate(360deg);
        }
      }
    }

    > h2 {
      font-size: clamp(4.8rem, 5vw, 6.4rem);
      text-shadow: -100px -4px 12px rgba(0, 0, 0, 0.25), #000 1px -1px, #000 -1px 1px, #000 1px 1px, #000 -1px -1px;;

      @media (max-width: 425px) {
        text-shadow: -30px -4px 12px rgba(0, 0, 0, 0.25);

        > span {
          margin-left: 2rem;
        }
      }

      > br + span {
        margin-left: 6.5rem;
      }
    }
  }
`;

export default Presentation;
