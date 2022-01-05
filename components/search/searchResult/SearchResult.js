import React from "react";
import { SearchResultContainer } from "./SearchResult.style"
import { useContexData } from '../../../lib/context'
import Breadcrumb from '../../common/Breadcrumbs'
import CardItem from "../../cards/cardItem/CardItem";

const SearcherResult = () => {
  const { products, categories, searchLoading } = useContexData();
  return (
    <>
      <Breadcrumb options={categories} />
      <SearchResultContainer searchLoading={searchLoading} disabled={searchLoading}>
        {
          products && products.slice(0, 4).map((item) =>
            <CardItem key={`card-${item.id}`} item={item} />
          )
        }
      </SearchResultContainer>
    </>
  );
};

export default SearcherResult;