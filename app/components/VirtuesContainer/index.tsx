"use client"

import styled from "styled-components";

const VirtuesContainer = styled.div`
  max-width: 1660px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  padding: 8rem 0;
  color: black;
  position: relative;

  @media (max-width: 1280px) {
    padding: 8rem 3rem;

    > img {
      display: none;
    }
  }

  > img {
    position: sticky;
    top: 20%;

    &:nth-child(1) {
      align-self: flex-start;
    }
  }

  div {
    > hr {
      margin: 5.8rem 0;
      border-top: 3px solid;
      border-color: #5e943e;
      opacity: unset;

      &:last-of-type {
        border-color: #2a8ecc;
      }
    }

    > div {
      position: relative;
      z-index: 2;
      padding: 40px;
      background: linear-gradient(120deg, #254611 0%, #143346 100%);
      border-radius: 12px;
      color: #ffffff;

      > h3 {
        font-size: clamp(3rem, 10vw, 4.8rem);
      }

      &:nth-of-type(2) > h3 {
        width: 100%;
        text-align: right;
      }

      &:nth-of-type(3) > h3 {
        width: 100%;
        text-align: center;
      }

      > p {
        font-size: clamp(2rem, 4vw, 3.2rem);
        text-align: justify;
      }
    }
  }

  > div:not(.taiuaContainer) {
    max-width: 57.8rem;
    width: 100%;
  }
`;

export default VirtuesContainer;
