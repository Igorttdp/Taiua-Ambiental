import styled from "styled-components";

const AttributeCard = styled.article`
  width: 32rem;
  min-height: 19rem;
  padding: 2.8rem 2rem;
  color: var(--white);
  background: var(--green-900);
  border-radius: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  > div {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;

    > h3 {
      font-size: 2.4rem;
    }
  }

  > p {
    font-size: 1.6rem;
  }

  > button {
    color: var(--white);
    display: flex;
    align-items: center;
    align-self: end;
    gap: 8px;

    > span {
        font-size: 1.5rem;
    }
  }
`;

export default AttributeCard;
