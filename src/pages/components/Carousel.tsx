import { CCarousel, CCarouselItem } from "@coreui/react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import CarouselThumb from "./CarouselThumb";
import { useState } from "react";

interface ICarouselProps {
  images: Array<StaticImageData>;
}

export interface IThumbProps {
  thumb: StaticImageData;
  thumbIndex: number;
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

const Carousel = ({ images }: ICarouselProps) => {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

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
        />
      ));
  };

  const onSlideCarousel = (active: number) => {
    setActiveIndex(active);

    if (active % 4 === 0) {
      setActiveThumb(active / 4);
    }
  };

  return (
    <StyledCCarousel controls transition="crossfade" onSlide={onSlideCarousel}>
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
        {renderThumbs()}
    </StyledCCarousel>
  );
};

export default Carousel;
