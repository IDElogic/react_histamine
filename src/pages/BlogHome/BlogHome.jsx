import React, { useState } from 'react';
import NavbarBlog  from '../../components/Navbar/NavbarBlog';
import EmptyList from '../../components/common/EmptyList/EmptyList';
import BlogList from '../../components/Home/BlogList/BlogList';
import Header from '../../components/Home/Header/Header';
import SearchBar from '../../components/Home/SearchBar/SearchBar';
import { blogList } from '../../config/data';
import { FoodList3 } from '../../container';
import './BlogHome.css'

const BlogHome = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <>
    <NavbarBlog/>
    <div className='bloghome' id='bloghome'>
    <FoodList3/>
      <div className='bloghome__container'> 
        <Header />
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />} 
      </div>
    </div>
  </>
  );
};

export default BlogHome;