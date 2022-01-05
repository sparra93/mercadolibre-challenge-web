import React from "react";
import SearchBox from '../search/searcherBox/SearchBox'

const Layout = ({ children }) => (
  <>
    <SearchBox />
    <div className='container'>
      {children}
    </div>
  </>
);

export default Layout;
