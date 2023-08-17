import styled from "styled-components";

interface IContainerProps {
  $background?: string;
  $transform?: string;
  $boxShadow?: string;
}

const Container = styled.section<IContainerProps>`
  width: 100%;
  min-height: 100vh;
  background: ${({ $background }) => $background ?? ""};
  background-size: cover;
  transform: ${({ $transform }) => $transform ?? "unset"};
  box-shadow: ${({ $boxShadow }) => $boxShadow ?? "unset"};

  @media (max-width: 840px) {
    background: ${({ $background }) => {
      if ($background) {
        let str = "";
        str = $background.replace("8.85%", "0%");
        str = str.replace("27.08%", "20%");

        return str;
      }

      return "";
    }};
  }

  @media (max-height: 660px) {
    background: ${({ $background }) => {
      if ($background) {
        let str = "";
        str = $background.replace("8.85%", "0%");
        str = str.replace("27.08%", "15%");

        return str;
      }

      return "";
    }};
  }

  @media (max-height: 470px) {
    background: ${({ $background }) => {
      if ($background) {
        let str = "";
        str = $background.replace("8.85%", "0%");
        str = str.replace("27.08%", "10%");

        return str;
      }

      return "";
    }};
  }

  h1 {
    > a {
      cursor: default;
    }
  }
`;

export default Container;