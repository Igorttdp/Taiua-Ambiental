import Image from "next/image";
import styled from "styled-components";
import Check from "../../assets/check.svg";
import ImageBtn from "../../assets/imagebtn.svg";
import { Fira_Sans } from "next/font/google";
import AttributeData from "@/interfaces/AttributesData";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const AttributeCardContainer = styled.article`
  width: 32rem;
  min-height: 21rem;
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

const AttributeCards = () => {
  const AttributesData: AttributeData[] = [
    {
      title: "Área de Convivência",
      subtitle:
        "Uma área ampla e aconchegante.Com camas, pufes, redes, Longe e muito mais.",
    },
    {
      title: "Eventos culturais",
      subtitle:
        "Recebemos artistas voluntários, que fazem apresentações para hóspedes e moradores da Vila.",
    },
    {
      title: "Vestiários",
      subtitle: "Surpreenda-se com nossa limpeza e organização.",
    },
    {
      title: "Cozinha equipada",
      subtitle:
        "Oferecemos uma cozinha completa e confortável com todos os equipamentos e utensílios para melhor atendê-los.",
    },
    {
      title: "Sustentabilidade",
      subtitle:
        "Temos o cuidado de oferecer uma hospedagem que proporcione uma maior conscientização sobre a importância do bioma Cerrado.",
    },
    {
      title: "Café da manhã",
      subtitle:
        "Temos parceria com uma cafeteria da Vila. Reserve com antecedência.",
    },
  ];

  return (
    <>
      {AttributesData.map((el, i) => (
        <AttributeCardContainer key={i}>
          <div>
            <Image width={37} height={37} src={Check} alt="ícone de checado" />
            <h3>{el.title}</h3>
          </div>
          <p>{el.subtitle}</p>
          <button className={fira.className}>
            <Image
              width={26}
              height={26}
              src={ImageBtn}
              alt="ícone de imagem"
            />
            <span>Ver Imagens</span>
          </button>
        </AttributeCardContainer>
      ))}
    </>
  );
};

export default AttributeCards;
