import styled from "styled-components";

const DifferentialsContainer = styled.div`
    width: 100%;
    min-height: inherit;
    padding: 6.5rem;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

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
  }
`;

export default DifferentialsContainer;
