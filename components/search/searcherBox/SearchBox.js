import React from "react";
import { useRouter } from "next/router";
import { SearchBoxContainer, NavBar } from "./SearchBox.style"
import Item from '../../../lib/api/Item'
import { useContexData } from '../../../lib/context'
import CustomLink from '../../common/CustomLink'

const SearcherBox = () => {
  const router = useRouter();
  const [isLoading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("")
  const { setProducts, setCategories, setSearchLoading } = useContexData();

  const handleQueryChange = React.useCallback(
    (e) => setQuery(e.target.value),
    []
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearchLoading(true);
    try {
      const { data: { items, categories } } = await Item.getByQuery(query);
      setProducts([...items])
      setCategories([...categories])
    } catch (error) {
      console.error(error);
    } finally {
      router.push('/')
      setLoading(false);
      setSearchLoading(false);
    }
  };
  return (
    <SearchBoxContainer role={'navbar'}>
      <NavBar>
        <CustomLink
          href="/"
          as={`/`}
        >
          <img src={'/logo.png'} alt="logo MercadoLibre" />
        </CustomLink>
        <form onSubmit={handleSubmit}>
          <input
            type={'text'}
            value={query}
            onChange={handleQueryChange}
          />
          <button
            type="submit"
            disabled={isLoading}
          >
            Buscar
          </button>
        </form>
      </NavBar>
    </SearchBoxContainer>
  );
};

export default SearcherBox;