import React from 'react'

import Header from './components/Header';
import NewPostForm from './components/NewPostForm';
import PostsList from './components/PostsList';
import SearchForm from './components/SearchForm';
import PostsContextProvider from './contexts/PostsContext';


function App() {

  return (
    <div className="App">
      <PostsContextProvider>
        <Header/>
        <SearchForm />
        <PostsList />
        <NewPostForm/>
      </PostsContextProvider>
    </div>
  );
}

export default App;
