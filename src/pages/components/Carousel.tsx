import { CCarousel, CCarouselItem } from "@coreui/react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

interface ICarouselProps {
  images: Array<StaticImageData>;
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
  return (
    <StyledCCarousel controls transition="crossfade">
      {images && images.map((el) => (
        <CCarouselItem key={el.src}>
          <Image src={el} width={800} height={800} alt="Imagem do Quarto" placeholder="blur" />
        </CCarouselItem>
      ))}
    </StyledCCarousel>
  );
};

export default Carousel;
