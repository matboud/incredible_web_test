import React from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

import Title from "../Title";
import theme from "../../../theme/config";
import Button from "../Button";
import { Container } from "../../templates/Layout/styles";

interface PopularCardProps {
  picture: string;
  alt: string;
  title: string;
  rating: number;
}

const index: React.FC<PopularCardProps> = ({ picture, alt, title, rating }) => {
  return (
    <div className="pop-card-container">
      <Image
        src={picture}
        alt={alt}
        width={600}
        height={350}
        layout="responsive"
      />
      <div className="pop-card-insider">
        <Title
          alignement={"left"}
          size={theme.fonts.size.xl6}
          color={theme.colors.white[100]}
          displayShadow={true}
        >
          {title}
        </Title>
        <Container flex>
          <Container>
            <div>
              <Rating ratingValue={rating} readonly size={20} />
            </div>

            <Button
              color={theme.colors.white[100]}
              background={theme.colors.red[500]}
              margin={"0.5rem 0"}
            >
              play
            </Button>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default index;
