"use client";

// Next
import Image, { StaticImageData } from "next/image";
import { Fira_Sans, Josefin_Sans } from "next/font/google";

// Interfaces
import AttributeData from "./interface";

// Third Part Libraries
import styled from "styled-components";
import { v4 } from "uuid";

// Components
import Button from "../../../Button";
import SolidCard from "../SolidCard";
import CustomDialog from "../../../CustomDialog";

// Images
import ImageBtn from "../../../../assets/imagebtn.svg";
import Culture from "../../../../assets/culture.svg";

import vt1 from "../../../../assets/rooms/vestiarios/vt1.jpg";
import vt2 from "../../../../assets/rooms/vestiarios/vt2.jpg";
import vt3 from "../../../../assets/rooms/vestiarios/vt3.jpg";
import vt4 from "../../../../assets/rooms/vestiarios/vt4.jpg";

import ac1 from "../../../../assets/rooms/camping/1.jpg";
import ac3 from "../../../../assets/rooms/camping/3.jpg";
import ac5 from "../../../../assets/rooms/camping/5.jpg";
import ac6 from "../../../../assets/rooms/camping/6.jpg";
import ac7 from "../../../../assets/rooms/camping/7.jpg";
import ac8 from "../../../../assets/rooms/camping/8.jpg";
import ac9 from "../../../../assets/rooms/camping/9.jpg";
import ac10 from "../../../../assets/rooms/camping/10.jpg";
import ac11 from "../../../../assets/rooms/camping/11.jpg";
import ac12 from "../../../../assets/rooms/camping/12.jpg";
import ac13 from "../../../../assets/rooms/camping/13.jpg";
import ac14 from "../../../../assets/rooms/camping/14.jpg";
import ac15 from "../../../../assets/rooms/camping/15.jpg";
import ac17 from "../../../../assets/rooms/camping/17.jpg";
import ac18 from "../../../../assets/rooms/camping/18.jpg";

import e1 from "../../../../assets/Experiences/eventos/e1.png";
import e2 from "../../../../assets/Experiences/eventos/e2.png";
import e3 from "../../../../assets/Experiences/eventos/e3.png";

import c1 from "../../../../assets/Experiences/cozinha/c1.jpg";
import c2 from "../../../../assets/Experiences/cozinha/c2.jpg";
import c3 from "../../../../assets/Experiences/cozinha/c3.jpg";
import c4 from "../../../../assets/Experiences/cozinha/c4.jpg";
import c5 from "../../../../assets/Experiences/cozinha/c5.jpg";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const AttributeCardContainer = styled.article`
  max-width: 54rem;
  height: 30rem;
  display: flex;
  flex-flow: row nowrap;
  border-radius: 12px;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 38.6rem;
    height: 54rem;
    flex-flow: column;
    gap: 2.5rem;
  }

  > img {
    width: 50%;
    height: 30rem;
    object-fit: cover;
    border-radius: 12px 0 0 12px;

    @media (max-width: 600px) {
      width: 100%;
      height: 25rem;
      border-radius: 12px 12px 0 0;
    }
  }

  > div {
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 1.2rem;
    padding: 0 20px;
    color: white;

    @media (max-width: 600px) {
      width: 100%;
    }

    > h3 {
      font-size: bold;
      font-size: 2rem;
    }

    > p {
      text-align: justify;
      font-weight: 400;
      font-size: 1.6rem;
    }

    > button,
    > div > button {
      display: flex;
      flex-flow: row nowrap;
      gap: 8px;
      font-size: 1.6rem;
      width: fit-content;
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
          ac3,
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
          ac17,
          ac18,
        ]
          .map((el) => ({ ...el, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map((el) => el),
      },
    },
    {
      title: "Eventos culturais",
      subtitle:
        "Recebemos artistas voluntários, que fazem apresentações para hóspedes e moradores da Vila.",
      album: {
        title: "Eventos Culturais",
        images: [e1, e2, e3]
          .map((el) => ({ ...el, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map((el) => el),
      },
    },
    {
      title: "Vestiários",
      subtitle: "Surpreenda-se com nossa limpeza e organização.",
      album: {
        title: "Vestiários",
        images: [vt1, vt2, vt3, vt4]
          .map((el) => ({ ...el, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map((el) => el),
      },
    },
    {
      title: "Cozinha equipada",
      subtitle:
        "Oferecemos uma cozinha completa e confortável com todos os equipamentos e utensílios para melhor atendê-los.",
      album: {
        title: "Cozinha Equipada",
        images: [c1, c2, c3, c4, c5]
          .map((el) => ({ ...el, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map((el) => el),
      },
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

  const renderAttributeCards = () =>
    AttributesData.map((el, i) => {
      if (el.album) {
        return (
          <AttributeCardContainer key={v4()}>
            <Image
              src={el.album.images[0]}
              width={386}
              height={300}
              placeholder="blur"
              alt="Imagem"
            />
            <div>
              <h3 className={josefin.className}>{el.title}</h3>
              <p className={fira.className}>{el.subtitle}</p>
              <CustomDialog
                albumImages={el.album.images}
                title={el.album.title}
                subtitle={el.subtitle}
              >
                <Button>
                  <Image src={ImageBtn} alt="Ícone de Imagem" />
                  Ver Imagens
                </Button>
              </CustomDialog>

              {el.title === "Eventos culturais" && (
                <Button>
                  <Image src={Culture} width={32} alt="Eventos culturais" />
                  Ver Eventos
                </Button>
              )}
            </div>
          </AttributeCardContainer>
        );
      }
    });

  const renderSolidCards = () =>
    AttributesData.map((el, i) => {
      if (!el.album)
        return <SolidCard key={v4()} title={el.title} subtitle={el.subtitle} />;
    });

  return (
    <>
      {renderAttributeCards()}
      {renderSolidCards()}
    </>
  );
};

export default AttributeCards;
