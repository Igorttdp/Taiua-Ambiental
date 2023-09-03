import { CCarousel, CCarouselItem } from "@coreui/react";
import styled, { css } from "styled-components";
import Image, { StaticImageData } from "next/image";
import CarouselThumb from "./CarouselThumb";
import { useState } from "react";

import fullscreen from "../../assets/fullscreen.svg";
import fullscreenExit from "../../assets/fullscreen_exit.svg";

interface ICarouselProps {
  images: Array<StaticImageData>;
}

export interface IThumbProps {
  thumb: StaticImageData;
  thumbIndex: number;
}

interface ICarouselContainerProps {
  $fullscreen: boolean;
}

const StyledCCarousel = styled(CCarousel)`
  width: 38rem;
  position: relative;

  @media (max-width: 767.98px) {
    width: 80vw;
  }

  @media (max-width: 425px) {
    width: 90vw;
  }

  .carousel-item {
    height: 75vh;
  }

  img {
    border-radius: 1rem;
    width: 38rem;
    height: 46rem;
    object-fit: cover;

    @media (max-width: 767.98px) {
      width: inherit;
      height: 75vh;
    }
  }
`;

const CarouselContainer = styled.div<ICarouselContainerProps>`
  > button {
    width: 3.6rem;
    height: 2.4rem;
    position: absolute;
    top: 2.8rem;
    left: 1.6rem;
    background: ${({ $fullscreen }) =>
        !$fullscreen ? `url(${fullscreen.src})` : `url(${fullscreenExit.src})`}
      center no-repeat;
    background-size: contain;
    z-index: 9;
    transition: none;

    @media (min-width: 767.98px) {
      display: none;
    }
  }

  > div > div img {
    ${({ $fullscreen }) =>
      !$fullscreen &&
      css`
        object-fit: contain;
        height: fit-content;
        border-radius: 0;
        transition: all .3s;
      `}
  }

  .carousel-item.active, .carousel-item-start, .carousel-item-end {
    ${({ $fullscreen }) =>
      !$fullscreen &&
      css`
        background-color: #000;
        display: flex;
        align-items: center;
      `}
  }
`;

const Carousel = ({ images }: ICarouselProps) => {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setfullscreen] = useState(true);

  const chunkArray = () => {
    const result = [];
    if (Array.isArray(images)) {
      for (let i = 0; i < images.length; i += 4) {
        const chunk =
          Array.isArray(images) &&
          images.slice(i, i + 4).map((image, index) => ({
            thumb: image,
            thumbIndex: i + index,
          }));

        if (chunk) result.push(chunk);
      }
      return result;
    }

    return false;
  };

  const thumbs = chunkArray();

  const renderThumbs = () => {
    if (thumbs)
      return thumbs.map((thumb, i) => (
        <CarouselThumb
          key={`thumb${i}`}
          thumb={thumb}
          visible={i === activeThumb ? true : false}
          activeIndex={activeIndex}
          $fullscreen={fullscreen}
        />
      ));
  };

  const onSlideCarousel = (active: number, direction: string) => {
    setActiveIndex(active);

    if ((active + 1) % 4 === 0 && direction === "prev") {
      setActiveThumb(Math.floor(active / 4));
    }

    if (active % 4 === 0) {
      setActiveThumb(active / 4);
    }
  };

  const closefullscreen = () => {
    setfullscreen(!fullscreen);
  };

  return (
    <CarouselContainer $fullscreen={fullscreen}>
      <button onClick={closefullscreen}></button>
      <StyledCCarousel
        controls
        interval={false}
        transition="crossfade"
        activeIndex={this}
        onSlide={onSlideCarousel}
      >
        {images &&
          images.map((el) => (
            <CCarouselItem key={el.src}>
              <Image
                src={el}
                width={800}
                height={800}
                alt="Imagem do Quarto"
                placeholder="blur"
              />
            </CCarouselItem>
          ))}
      </StyledCCarousel>
      {renderThumbs()}
    </CarouselContainer>
  );
};

export default Carousel;
