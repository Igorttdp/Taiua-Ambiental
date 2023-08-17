// Next
import Head from "next/head";
import Image from "next/image";
import { Josefin_Sans, Fira_Sans } from "next/font/google";

// Images
import Logo from "../assets/Logo.png";
import Background from "../assets/background.jpg";
import ArrowDown from "../assets/arrowDown.svg";
import Folhas from "../assets/folhas.png";
import Check from "../assets/check.svg";
import ImageBtn from "../assets/imagebtn.svg";
import LogoFlat from "../assets/logo-flat.png";
import Chapada1 from "../assets/chapada1.png";
import Chapada2 from "../assets/chapada2.png";
import Chapada3 from "../assets/chapada3.png";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/youtube.svg";
import Email from "../assets/email.svg";
import WhatsApp from "../assets/whatsapp.svg";
import Phone from "../assets/phone.svg";

// Styled-Components
import HomeContainer from "./components/HomeContainer";
import GlobalStyle from "./components/GlobalStyles";
import Container from "./components/Container";
import Showcase from "./components/Showcase";
import Presentation from "./components/Presentation";
import Button from "./components/Button";
import VideoModel from "./components/VideoModal";
import Accommodations from "./components/Accommodations";
import RoomCards from "./components/RoomCard";
import DifferentialsContainer from "./components/DifferentialsContainer";
import AttributeCard from "./components/AttributeCard";
import VirtuesContainer from "./components/VirtuesContainer";

// Enum
import { ButtonVariant } from "@/interfaces/Enums";
import VisitUsContainer from "./components/VisitUsContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Taiuá Ambiental</title>
        <meta
          name="description"
          content="Pousada e Camping Taiuá Ambiental, um lugar incrível para quem busca uma experiência única e sustentável em contato com a natureza."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeContainer className={josefin.className}>
        <GlobalStyle />
        <Navbar />
        <Container
          $background={`url(${Background.src}) no-repeat center`}
          $boxShadow="0px 4px 80px 500px rgba(0, 0, 0, 0.40) inset;"
        >
          <Showcase>
            <h1>
              <a href="#" draggable={false}>
                <Image
                  src={Logo}
                  alt="Taiuá Ambiental"
                  placeholder="blur"
                  style={{ borderRadius: "100%" }}
                  draggable={false}
                />
              </a>
            </h1>
            <span>
              Um lugar incrível para <br /> momentos especiais
            </span>
            <Image src={ArrowDown} width={36} alt="Ver mais" />
          </Showcase>
        </Container>
        <Container
          $background="linear-gradient(180deg, rgba(61, 84, 48, 0.03) 8.85%, #47702F 27.08%, #FFF 100%)"
          $transform={"translateY(-30vh)"}
        >
          <Presentation>
            <div>
              <h2>
                <span>A NOSSA</span>
                <br />
                <span>POUSADA</span>
              </h2>

              <div>
                <Button
                  $variant={ButtonVariant.OUTLINE_BLUE_TEXT}
                  className={fira.className}
                >
                  Reservar
                </Button>
                <Button
                  $variant={ButtonVariant.OUTLINE_BLUE_TEXT}
                  className={fira.className}
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
            <div>
              <VideoModel
                width="320"
                height="540"
                src="https://www.youtube.com/embed/H7Bn2rfzeXA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <Image
                src={Folhas}
                width={563}
                height={263}
                alt="Folhas"
                draggable={false}
                priority
              />
            </div>
          </Presentation>
        </Container>
        <Container>
          <Accommodations>
            {/* 1⁰ barraca equipada
          2⁰ área de camping
          3⁰ jatobá 
          4⁰ baru 
          5⁰ mangaba
          6⁰ pequi 
          7⁰ pato - mergulhão
          8⁰ suite grupo 1 
          9⁰ suite grupo 2 
          10⁰ suite grupo 3 
          11⁰ suite grupo 4 */}

            <h2>Acomodações</h2>
            <div>
              <RoomCards />
              <RoomCards />
              <RoomCards />
              <RoomCards />
              <RoomCards />
              <RoomCards />
              <RoomCards />
              <RoomCards />
              <RoomCards />
            </div>
          </Accommodations>
        </Container>
        <Container
          $background="linear-gradient(180deg, #fff 0%, #cce6f5 100%)"
          style={{ minHeight: "fit-content" }}
        >
          <DifferentialsContainer>
            <h2>Nosso Espaço e Diferenciais</h2>

            <div>
              <AttributeCard>
                <div>
                  <Image
                    width={37}
                    height={37}
                    src={Check}
                    alt="ícone de checado"
                  />
                  <h3>Título qualquer</h3>
                </div>
                <p>
                  Uma área ampla e aconchegante. Com camas, pufes, redes, Longe
                  e muito mais.
                </p>
                <button className={fira.className}>
                  <Image
                    width={26}
                    height={26}
                    src={ImageBtn}
                    alt="ícone de imagem"
                  />
                  <span>Ver Imagens</span>
                </button>
              </AttributeCard>
              <AttributeCard>
                <div>
                  <Image
                    width={37}
                    height={37}
                    src={Check}
                    alt="ícone de checado"
                  />
                  <h3>Título qualquer</h3>
                </div>
                <p>
                  Uma área ampla e aconchegante. Com camas, pufes, redes, Longe
                  e muito mais.
                </p>
                <button className={fira.className}>
                  <Image
                    width={26}
                    height={26}
                    src={ImageBtn}
                    alt="ícone de imagem"
                  />
                  <span>Ver Imagens</span>
                </button>
              </AttributeCard>
              <AttributeCard>
                <div>
                  <Image
                    width={37}
                    height={37}
                    src={Check}
                    alt="ícone de checado"
                  />
                  <h3>Título qualquer</h3>
                </div>
                <p>
                  Uma área ampla e aconchegante. Com camas, pufes, redes, Longe
                  e muito mais.
                </p>
                <button className={fira.className}>
                  <Image
                    width={26}
                    height={26}
                    src={ImageBtn}
                    alt="ícone de imagem"
                  />
                  <span>Ver Imagens</span>
                </button>
              </AttributeCard>
              <AttributeCard>
                <div>
                  <Image
                    width={37}
                    height={37}
                    src={Check}
                    alt="ícone de checado"
                  />
                  <h3>Título qualquer</h3>
                </div>
                <p>
                  Uma área ampla e aconchegante. Com camas, pufes, redes, Longe
                  e muito mais.
                </p>
                <button className={fira.className}>
                  <Image
                    width={26}
                    height={26}
                    src={ImageBtn}
                    alt="ícone de imagem"
                  />
                  <span>Ver Imagens</span>
                </button>
              </AttributeCard>
              <AttributeCard>
                <div>
                  <Image
                    width={37}
                    height={37}
                    src={Check}
                    alt="ícone de checado"
                  />
                  <h3>Título qualquer</h3>
                </div>
                <p>
                  Uma área ampla e aconchegante. Com camas, pufes, redes, Longe
                  e muito mais.
                </p>
                <button className={fira.className}>
                  <Image
                    width={26}
                    height={26}
                    src={ImageBtn}
                    alt="ícone de imagem"
                  />
                  <span>Ver Imagens</span>
                </button>
              </AttributeCard>
              <AttributeCard>
                <div>
                  <Image
                    width={37}
                    height={37}
                    src={Check}
                    alt="ícone de checado"
                  />
                  <h3>Título qualquer</h3>
                </div>
                <p>
                  Uma área ampla e aconchegante. Com camas, pufes, redes, Longe
                  e muito mais.
                </p>
                <button className={fira.className}>
                  <Image
                    width={26}
                    height={26}
                    src={ImageBtn}
                    alt="ícone de imagem"
                  />
                  <span>Ver Imagens</span>
                </button>
              </AttributeCard>
            </div>
          </DifferentialsContainer>
        </Container>
        <Container
          $background="linear-gradient(180deg, #cce6f5 0%, #4da5dd 100%)"
          style={{ minHeight: "fit-content" }}
        >
          <VirtuesContainer>
            <div>
              <h2>Missão e Visão</h2>
              <p>
                Uma abordagem sustentável para o turismo! Bem-vindo à Pousada e
                Camping Taiuá Ambiental, um lugar incrível para quem busca uma
                experiência única e sustentável em contato com a natureza. Aqui,
                você encontrará um ambiente que inspira e encanta pela sua
                beleza natural e pelo comprometimento com a preservação do Bioma
                Cerrado. Taiua Ambiental oferece vários tipos de hospedagem,
                promovendo bem estar e conforto aos hóspedes. Tudo aqui é
                pensado com cuidado, desde a escolha dos materiais utilizados na
                construção até as práticas sustentáveis de gestão.Nós também
                realizamos eventos abertos para hóspedes e comunidade para
                promover arte, cultura e conhecimento. Aproveite a proximidade
                do Parque Nacional Chapada dos Veadeiros, Patrimônio Mundial
                Natural da Humanidade pela UNESCO, e explore todas as maravilhas
                da região.
              </p>
            </div>

            <Image src={LogoFlat} alt="ícone de imagem" placeholder="blur" />
          </VirtuesContainer>
        </Container>
        <Container
          $background="linear-gradient(180deg, #4da5dd 0%, #226fa0 100%)"
          style={{ minHeight: "fit-content" }}
        >
          <VisitUsContainer>
            <h3>VENHA NOS VISITAR</h3>
            <div>
              <div className="visitCard">
                <Image
                  src={Chapada1}
                  alt="Chapada dos Veadeiros"
                  placeholder="blur"
                />
                <span>VENHA</span>
              </div>
              <div className="visitCard">
                <Image
                  src={Chapada2}
                  alt="Chapada dos Veadeiros"
                  placeholder="blur"
                />
                <span>NOS</span>
              </div>
              <div className="visitCard">
                <Image
                  src={Chapada3}
                  alt="Chapada dos Veadeiros"
                  placeholder="blur"
                />
                <span>VISITAR</span>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.300491572392!2d-47.81536818883117!3d-14.177170185161685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93450a6606142523%3A0x43db8181b1ed9b2b!2sPousada%20Taiu%C3%A1%20Ambiental!5e0!3m2!1spt-BR!2sbr!4v1691856899258!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </VisitUsContainer>
        </Container>
      </HomeContainer>
      <Footer
        className={josefin.className}
        $background="linear-gradient(180deg, #226fa0 0%, #000 100%)"
      >
        <div>
          <div id="sm">
            <span>REDES SOCIAIS</span>
            <div>
              <a href="" target="_blank">
                <Image
                  width={30}
                  height={30}
                  src={Facebook}
                  alt="Ícone Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/taiuaambiental/"
                target="_blank"
              >
                <Image
                  width={30}
                  height={30}
                  src={Instagram}
                  alt="Ícone Instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/@TaiuachapadadosVeadeiros"
                target="_blank"
              >
                <Image
                  width={30}
                  height={30}
                  src={Youtube}
                  alt="Ícone Youtube"
                />
              </a>
            </div>
          </div>

          <Image
            id="ft-logo"
            src={Logo}
            width={190}
            height={190}
            alt="Taiuá Ambiental"
            placeholder="blur"
            style={{ borderRadius: "100%" }}
            draggable={false}
          />
          <div id="cu">
            <span>FALE CONOSCO</span>
            <div>
              <a href="mailto:" target="_blank">
                <Image width={31} height={24} src={Email} alt="Ícone Email" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5562999818977&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <Image
                  width={29}
                  height={30}
                  src={WhatsApp}
                  alt="Ícone WhatsApp"
                />
              </a>
              <div>
                <Image
                  width={29}
                  height={29}
                  src={Phone}
                  alt="Ícone Telefone"
                />
              </div>
            </div>
          </div>
        </div>

        <span>Copyright © 2023 Taiuá Ambiental</span>
      </Footer>
    </>
  );
}
