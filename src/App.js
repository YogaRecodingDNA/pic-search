import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from './api';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList allImages={images} />
    </div>
  )
}

export default App;