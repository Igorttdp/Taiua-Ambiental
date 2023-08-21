// React Hooks
import { useState } from "react";

// Next
import Image from "next/image";
import { Fira_Sans } from "next/font/google";

// Styled-Components
import styled from "styled-components";
import Button from "./Button";

// Images
import Logo from "../../assets/Logo.png";

// MUI Components
import Drawer from "@mui/material/Drawer";

const NavbarContainer = styled.nav`
  width: 100%;
  background: rgba(139, 139, 139, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 8px 4vw;

  position: fixed;
  z-index: 10;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;

  @media (min-width: 1200px) {
    > div {
      > button#Menu {
        display: none;
      }
    }
  }

  @media (max-width: 1024px) {
    > div > button {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  > div {
    > button#Menu {
      margin-left: 2rem;
    }

    @media (max-width: 400px) {
      > button {
        padding: 0.8rem 2rem;
      }
    }
  }

  > ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 2vw;
    text-align: center;

    @media (max-width: 1200px) {
      display: none;
    }

    > li {
      color: var(--white);
      font-size: 2rem;
      font-weight: 500;
      text-shadow: #000 1px -1px, #000 -1px 1px, #000 1px 1px, #000 -1px -1px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        display: block;
        transition: all 0.3s ease;
        bottom: -0.5rem;
      }

      &:hover::after {
        width: 100%;
        height: 1px;
        background-color: #fff;
      }
    }
  }
`;

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerHandler = () => {
    setIsOpen(!isOpen);
  };

  const redirectToLink = () => {
    window.open("https://taiuaambiental.motordereservas.com.br/novareserva");
  };

  return (
    <NavbarContainer className={fira.className}>
      <a href="#">
        <Image
          src={Logo}
          width={50}
          height={50}
          alt="Taiuá Ambiental"
          placeholder="blur"
          style={{ borderRadius: "100%" }}
          draggable={false}
        />
      </a>
      <ul>
        <li>
          <a href="#Presentation">Nossa Pousada</a>
        </li>
        <li>
          <a href="#Accommodations">Acomodações</a>
        </li>
        <li>
          <a href="#Attributes">O que Ofereçemos</a>
        </li>
        <li>
          <a href="#Virtues">Missão & Valores</a>
        </li>
        <li>
          <a href="#VisitUs">Venha nos Visitar</a>
        </li>
      </ul>

      <div>
        <Button onClick={redirectToLink}>Reservar</Button>
        <Button id="Menu" onClick={drawerHandler}>
          Menu
        </Button>
        <Drawer anchor={"right"} open={isOpen} onClose={drawerHandler}>
          <ul>
            <li>
              <a onClick={drawerHandler} href="#Presentation">
                Nossa Pousada
              </a>
            </li>
            <li>
              <a onClick={drawerHandler} href="#Accommodations">
                Acomodações
              </a>
            </li>
            <li>
              <a onClick={drawerHandler} href="#Attributes">
                O que Ofereçemos
              </a>
            </li>
            <li>
              <a onClick={drawerHandler} href="#Virtues">
                Missão & Valores
              </a>
            </li>
            <li>
              <a onClick={drawerHandler} href="#VisitUs">
                Venha nos Visitar
              </a>
            </li>
          </ul>
        </Drawer>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
