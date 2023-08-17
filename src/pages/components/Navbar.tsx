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
  background: rgba(255, 255, 255, 0.15);
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

  @media (min-width: 1025px) {
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
    setIsOpen(!!isOpen);
  }

  return (
    <NavbarContainer className={fira.className}>
      <Image
        src={Logo}
        width={50}
        height={50}
        alt="Taiuá Ambiental"
        placeholder="blur"
        style={{ borderRadius: "100%" }}
        draggable={false}
      />
      <ul>
        <li>
          <a href="">Nossa Pousada</a>
        </li>
        <li>
          <a href="">Acomodações</a>
        </li>
        <li>
          <a href="">Espaço & Diferenciais</a>
        </li>
        <li>
          <a href="">Missão & Valores</a>
        </li>
        <li>
          <a href="">Venha nos Visitar</a>
        </li>
      </ul>

      <div>
        <Button>Reservar</Button>
        <Button id="Menu" onClick={drawerHandler}>
          Menu
        </Button>
        <Drawer anchor="right" open={isOpen} onClose={drawerHandler}>
          <ul>
            <li>
              <a href="">Nossa Pousada</a>
            </li>
            <li>
              <a href="">Acomodações</a>
            </li>
            <li>
              <a href="">Espaço & Diferenciais</a>
            </li>
            <li>
              <a href="">Missão & Valores</a>
            </li>
            <li>
              <a href="">Venha nos Visitar</a>
            </li>
          </ul>
        </Drawer>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
