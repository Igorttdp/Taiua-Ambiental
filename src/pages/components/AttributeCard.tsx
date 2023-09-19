import Image from "next/image";
import styled from "styled-components";
import Check from "../../assets/check.svg";
import ImageBtn from "../../assets/imagebtn.svg";
import { Fira_Sans } from "next/font/google";
import AttributeData from "@/interfaces/AttributesData";
import CustomDialog from "./CustomDialog";

// Images

import vt1 from "../../assets/rooms/vestiarios/vt1.jpg";
import vt2 from "../../assets/rooms/vestiarios/vt2.jpg";
import vt3 from "../../assets/rooms/vestiarios/vt3.jpg";
import vt4 from "../../assets/rooms/vestiarios/vt4.jpg";

import ac1 from "../../assets/rooms/camping/1.jpg";
import ac2 from "../../assets/rooms/camping/2.jpg";
import ac3 from "../../assets/rooms/camping/3.jpg";
import ac4 from "../../assets/rooms/camping/4.jpg";
import ac5 from "../../assets/rooms/camping/5.jpg";
import ac6 from "../../assets/rooms/camping/6.jpg";
import ac7 from "../../assets/rooms/camping/7.jpg";
import ac8 from "../../assets/rooms/camping/8.jpg";
import ac9 from "../../assets/rooms/camping/9.jpg";
import ac10 from "../../assets/rooms/camping/10.jpg";
import ac11 from "../../assets/rooms/camping/11.jpg";
import ac12 from "../../assets/rooms/camping/12.jpg";
import ac13 from "../../assets/rooms/camping/13.jpg";
import ac14 from "../../assets/rooms/camping/14.jpg";
import ac15 from "../../assets/rooms/camping/15.jpg";
import ac16 from "../../assets/rooms/camping/16.jpg";
import ac17 from "../../assets/rooms/camping/17.jpg";
import ac18 from "../../assets/rooms/camping/18.jpg";

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
    &:first-of-type {
      width: fit-content;
      display: flex;
      align-items: center;
    }

    &:last-child {
      display: contents;
    }

    gap: 8px;

    > h3 {
      font-size: 2.4rem;
    }
  }

  > p {
    font-size: 1.6rem;
  }

  button.attrBtn {
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
      album: {
        title: "Área de Convivência",
        images: [
          ac1,
          ac2,
          ac3,
          ac4,
          ac5,
          ac6,
          ac7,
          ac8,
          ac9,
          ac10,
          ac11,
          ac12,
          ac13,
          ac14,
          ac15,
          ac16,
          ac17,
          ac18,
        ].map((el) => ({...el, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(el => el),
      },
    },
    {
      title: "Eventos culturais",
      subtitle:
        "Recebemos artistas voluntários, que fazem apresentações para hóspedes e moradores da Vila.",
    },
    {
      title: "Vestiários",
      subtitle: "Surpreenda-se com nossa limpeza e organização.",
      album: { title: "Vestiários", images: [vt1, vt2, vt3, vt4].map((el) => ({...el, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(el => el) },
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
          {el.album && (
            <CustomDialog
              title={el.title}
              subtitle=""
              albumImages={el.album.images}
            >
              <button className={fira.className + " attrBtn"}>
                <Image
                  width={26}
                  height={26}
                  src={ImageBtn}
                  alt="ícone de imagem"
                />
                <span>Ver Imagens</span>
              </button>
            </CustomDialog>
          )}
        </AttributeCardContainer>
      ))}
    </>
  );
};

export default AttributeCards;
