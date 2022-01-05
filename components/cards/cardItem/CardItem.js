import React from "react";
import { Items, ImgContainer, Information } from "./CardItem.style";
import CustomLink from '../../../components/common/CustomLink'
import {getAmountFormatted}  from '../../../lib/utils/currency'

const CardItem = ({ item }) => {
  const {
    picture,
    price: {
      amount,
      currency
    },
    title
  } = item;
  const priceFormatted = getAmountFormatted('es-AR', amount, currency);

  return (
    <CustomLink
      key={item.id}
      className={'item'}
      href="/items/[pid]"
      as={`/items/${item.id}`}>
      <Items>
        <ImgContainer>
          <img src={picture}></img>
        </ImgContainer>
        <Information>
          <div className="price">
            {priceFormatted}
          </div>
          <div>
            {title}
          </div>
        </Information>
      </Items>
    </CustomLink>
  );
};

export default CardItem;
