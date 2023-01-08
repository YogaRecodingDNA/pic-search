import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import searchImages from './api';

function App() {

  const handleSubmit = (term) => {
    // const result = searchImages(term);
    console.log("do a search with", term);
    // return result;
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App;