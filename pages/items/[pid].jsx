import { useRouter } from "next/router";
import React from "react";
import Item from '../../lib/api/Item'
import DetailItem from '../../components/detailItem/DetailItem'

const DetailProduct = ({ items, categories }) => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  return (
    items && <DetailItem categories={categories} product={items[0]} />
  );
};

DetailProduct.getInitialProps = async ({ query: { pid } }) => {
  const { data: { items, categories } } = await Item.getById(pid);
  return { items, categories };
};

export default DetailProduct;
