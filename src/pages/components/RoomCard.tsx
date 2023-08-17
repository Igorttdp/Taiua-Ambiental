import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import { ButtonVariant } from "@/interfaces/Enums";
import { Fira_Sans } from "next/font/google";

const RoomCardContainer = styled.article`
  width: 32rem;
  height: 40rem;

  display: flex;
  flex-flow: column nowrap;
  border: 1px solid var(--black);
  border-radius: 1.2rem;

  &:hover {
    box-shadow: 0px 0px 20px -1px #35b0fc;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    width: 100%;

    flex-flow: row nowrap;
  }

  &:nth-child(2n):hover {
    box-shadow: 0px 0px 20px 2px #5e943e;
  }

  transition: all 0.3s;

  > img {
    width: 100%;
    height: auto;
    border-radius: 1.2rem 1.2rem 0 0;
    object-fit: cover;

    @media (min-width: 600px) and (max-width: 800px) {
      width: 50%;
      border-radius: 1.2rem 0 0 1.2rem;
    }
  }

  > div {
    height: inherit;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    @media (min-width: 600px) and (max-width: 800px) {
      width: 50%;
    }

    h3 {
      font-size: 2rem;
    }

    span {
      font-size: 1.4rem;
      color: #686868;
    }

    > div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      > button {
        padding: 8px 2rem;
        font-size: 1.5rem;
      }
    }
  }
`;

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const RoomCard = () => {
  return (
    <RoomCardContainer>
      <Image
        src="https://lh3.googleusercontent.com/pw/AIL4fc-AbijTtoC4Y9XbqxlQiKZGohb-0N0Xry1Cub2_UrdwwRV7xviWN-pr1O2WCiK5mZKC0q-YDT3PSt_MhEz1UYqBh9X-KL9Gw6kQDY262V2y1MbOafd5X9uiQXOk4gqMlIthmGP9ew1PzwGKhxjTAMKe=w1404-h941-s-no"
        width={320}
        height={200}
        alt="Quarto"
        draggable={false}
        priority
      />

      <div>
        <h3>QUARTO X</h3>
        <span>Até X Pessoas</span>

        <div>
          <Button
            className={fira.className}
            $variant={ButtonVariant.OUTLINE_BLUE_TEXT}
          >
            Reservar
          </Button>
          <Button
            className={fira.className}
            $variant={ButtonVariant.OUTLINE_GREEN_TEXT}
          >
            Ver mais+
          </Button>
        </div>
      </div>
    </RoomCardContainer>
  );
};

export default RoomCard;
