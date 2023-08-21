import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import { ButtonVariant } from "@/interfaces/Enums";
import { Fira_Sans } from "next/font/google";
import { IRoomDataProps } from "@/interfaces/RoomsData";

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
  const RoomsData: IRoomDataProps[] = [
    {
      title: "Barraca Equipada",
      subtitle: "Barraca equipada individual, tripla e quadrupla",
      imgSrc:
        "https://lh3.googleusercontent.com/pw/AIL4fc_1Be2DEyXVX8j_VBtrvZdFpGJAQ6_Q25aSCCWszQBDYF2u2gUedlcEcCYaQdBuGVYLMen5gG6kqMhFU2t5PdnedmxRZQapDY4HvLAHf0z4RieuOio4_2UMv4SOeXTqip85fRKoOYLiKFo6xjThQh_f=w1255-h941-s-no",
      blurData:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMysvfAwAElgIFWqQ0JQAAAABJRU5ErkJggg==",
    },
    {
      title: "Área de Camping",
      subtitle: "Traga sua barraca",
      imgSrc:
        "https://lh3.googleusercontent.com/pw/AIL4fc-tRc_VROP0As-E-lHHzdDPp-vbyymGkonHnUTq-1wrwKTsvuug3-M-l3sIfXrULzAxt0sDvqrTYrmbjyA4lVdY3jdvc9nX6jPPMORVSDHeMu1ez4H7xDAPdVKuE8s2QwR4cU7XEzA58LYEHgoG5AeS=w1412-h941-s-no",
      blurData:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN00jPZAwACwAFiKmKPogAAAABJRU5ErkJggg==",
    },
    {
      title: "Suíte Jatobá",
      subtitle: "Até 2 pessoas",
      imgSrc:
        "https://lh3.googleusercontent.com/pw/AIL4fc90e4uTYTFpETrBCEjyuvh9V3y6hKAqfZy-lP611E18o0glpPbADF3nSdvms5Z-XkYlqi6IdKXAJBQS1YQ6qtTkrrMS7jJFryrCRbKKrZR7MTW2RLt3_cFrAn95b3KNokn-lUTHL0g2GPIeUPe-Otah=w1411-h941-s-no",
      blurData:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs/P17DwAHkQMtarjEIQAAAABJRU5ErkJggg==",
    },
    {
      title: "Suíte Baru",
      subtitle: "Até 2 pessoas",
      imgSrc:
        "https://lh3.googleusercontent.com/pw/AIL4fc8KTrITyRG2Vk-ocwcUCb0zOt7M6dP8_ZLRkSrf5NxTkHpGdyGUYF9VYVd2AAYo9JSsnCXYKgJpCCSTY9oXKIE0c0Nmjy_RxKlCkJgcOZnN51AE-JKxcSNDYpwzvw-BiRfmrsT699hSdah3kYj8B27h=w1404-h941-s-no",
      blurData:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcu2neHgAHDALL9WjlJAAAAABJRU5ErkJggg==",
    },
    {
      title: "Suíte Mangaba",
      subtitle: "Até 4 pessoa",
      imgSrc:
        "https://lh3.googleusercontent.com/pw/AIL4fc9eGGwUMLWfpapcoHz74JJO_iSsFQH8J5i7GGnzAGihcIAFWqdxNgmtXQ8po8hmJCx4JOCaTc2rvgXRlhaHbc5NPfgdew_fMCuX6umROm51dyXAj3ZSry8okwZ-3K8Md6EVxi3tnOo7CjHnuVTYjELz=w1407-h941-s-no",
      blurData:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8ualxDwAHggLa8BLkhQAAAABJRU5ErkJggg==",
    },
    {
      title: "Suíte Pequi",
      subtitle: "Até 3 pessoas",
      imgSrc:
        "https://lh3.googleusercontent.com/pw/AIL4fc8yxWhE_W-gHO41iwLrqZuf7Sa0HXTTpJ536g4NW87CwVFUynZnG6xh-UwCmMjp5vien-12Mmo_iL9pYkkz4I6pBOOtKpubq70WVauO6wPtEFroAHJvFCb7Og3HSzJPH1S6mbYOcugK90SZzsCju61O=w1412-h941-s-no",
      blurData:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8MqVwDwAGtAKXDUKpJwAAAABJRU5ErkJggg==",
    },
    {
      title: "Suíte Pato Mergulhão",
      subtitle: "Até 3 pessoas",
      imgSrc:
        "https://lh3.googleusercontent.com/pw/AIL4fc9OQ8tS3dYn0mxVxKhzsHI42rxAynyUmybsfGe__JsPG1mgo0QBvS2w0SEf0SXywo9TAQ9R6IikzyD_t9JA8CJnsqMl6YUw-cUK1PvzNTZmGNYupE2Ks86AcGgRvVsouYCmG0OtAq4V-Kqeq93Km1XB=w1412-h941-s-no",
      blurData:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcuWTBHgAGlgKrMoIGTgAAAABJRU5ErkJggg==",
    },
    // {
    //   title: "",
    //   subtitle: "",
    //   imgSrc: ""
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   imgSrc: ""
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   imgSrc: ""
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   imgSrc: ""
    // }
  ];

  const redirectToLink = () => {
    window.open("https://taiuaambiental.motordereservas.com.br/novareserva");
  };

  return (
    <>
      {RoomsData.map((el, i) => (
        <RoomCardContainer key={i}>
          <Image
            src={el.imgSrc}
            width={320}
            height={200}
            alt="Quarto"
            draggable={false}
            placeholder="blur"
            blurDataURL={el.blurData}
          />

          <div>
            <h3>{el.title}</h3>
            <span>{el.subtitle}</span>

            <div>
              <Button
                className={fira.className}
                $variant={ButtonVariant.OUTLINE_BLUE_TEXT}
                onClick={redirectToLink}
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
      ))}
    </>
  );
};

export default RoomCard;
