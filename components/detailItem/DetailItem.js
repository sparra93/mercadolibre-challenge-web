import React from "react";
import Breadcrumb from '../../components/common/Breadcrumbs'
import { DetailContainer } from './DetailItem.style'
import Detail from '../cards/detail/Detail'

const DetailItem = (props) => {
  const { categories, product } = props;
  return (
    <>
      <Breadcrumb options={categories} />
      <DetailContainer>
        {
          product && <Detail product={product} />
        }
      </DetailContainer>
    </>
  );
};

export default DetailItem;