import Link from "next/link";
import React from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

import {
  ScLink,
  Container,
  PosterContainer,
  Image,
  Overview,
  PlayButton,
  ContentContainer,
  Title,
  YearRatingContainer,
  Year,
  ContentRating,
  ContentRatingChild,
  ShareArea,
} from "./styles";
import { URL_handler } from "../Shared";

interface MoviCardProps {
  id: number;
  title: string;
  year: number;
  rating: number;
  description: string;
  cover: string;
}

const index: React.FC<MoviCardProps> = ({
  id,
  title,
  year,
  rating,
  cover,
  description,
}) => {
  return (
    <ScLink key={id}>
      <Container>
        <PosterContainer>
          <Image alt={cover + "movie banner"} imageUrl={cover}></Image>
          <Overview>
            {description ? `${description.substring(0, 90)}..` : description}
          </Overview>

          <Link href={`details/${id}`}>
            <PlayButton>Watch</PlayButton>
          </Link>
        </PosterContainer>
        <ContentContainer>
          <Title>
            {title && title.length > 15 ? `${title.substring(0, 15)}..` : title}
          </Title>
          <YearRatingContainer>
            <Year>year: {year}</Year>
            <ContentRating>
              ⭐ &nbsp; <ContentRatingChild>{rating}</ContentRatingChild>
            </ContentRating>
          </YearRatingContainer>

          <ShareArea>
            <FacebookShareButton
              url={URL_handler(id)}
              quote={`checkout this amazing movie  "${title}" 👌 from MOVIfy 🎬 `}
            >
              <FacebookIcon round size={23} />
            </FacebookShareButton>

            <WhatsappShareButton url="www.movify.com">
              <WhatsappIcon round size={23} />
            </WhatsappShareButton>
          </ShareArea>
        </ContentContainer>
      </Container>
    </ScLink>
  );
};

export default index;
