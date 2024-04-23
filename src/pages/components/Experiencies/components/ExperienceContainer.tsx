import styled from "styled-components";

const ExperienceContainer = styled.div`
  width: 100%;
  min-height: inherit;
  padding: 6.5rem;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (max-width: 425px) {
    padding: 6.5rem 2rem;
  }

  > h2 {
    font-size: 4.8rem;
  }

  > div {
    max-width: 1200px;
    margin-top: 10rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;

    > article > div > button {
      border: none;
      font-weight: 500;

      &:hover {
        filter: brightness(0.9);
      }
    }

    > article {
      &:nth-child(3n-2) {
        background-color: #254611;
        > div > button {
          background-color: var(--green-600);
        }
      }

      &:nth-child(3n-1) {
        background-color: #143346;
        > div > button {
          background-color: var(--blue-500-default);
        }
      }

      &:nth-child(3n) {
        background-color: white;

        > div {
          color: black;
        }
      }
    }
  }
`;

export default ExperienceContainer;
