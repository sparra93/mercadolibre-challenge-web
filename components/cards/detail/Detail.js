import React from "react";
import { getAmountFormatted } from '../../../lib/utils/currency'
import {
  ProductContainer,
  ImgContainer,
  DescriptionTitle,
  Description,
  Condition,
  Title,
  Price,
  ButtonContainer,
  InformationContainer
} from './Detail.style'

const Detail = ({ product }) => {
  const {
    picture,
    condition,
    price: {
      amount,
      currency
    },
    title,
    description,
    sold_quantity
  } = product;
  const priceFormatted = getAmountFormatted('es-AR', amount, currency);

  return (
    <>
      <ProductContainer>
        <ImgContainer>
          <img src={picture}></img>
          <DescriptionTitle>
            Descripcion del producto
          </DescriptionTitle>
          <Description>
            {description}
          </Description>
        </ImgContainer>
        <InformationContainer>
          <Condition>
            {condition} - {sold_quantity} Vendidos
          </Condition>
          <Title>
            {title}
          </Title>
          <Price>
            {priceFormatted}
          </Price>
          <ButtonContainer>
            <button class="button">Comprar</button>
          </ButtonContainer>
        </InformationContainer>

      </ProductContainer>
    </>
  );
};

export default Detail;
