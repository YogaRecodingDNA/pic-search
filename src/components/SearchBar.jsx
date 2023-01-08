import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  
  const handleChange = (event) => {
    setTerm(event.target.value); 
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit} action="">
        <button>Search</button>
        <span>
          <input value={term} onChange={handleChange} />
        </span>
      </form>
    </div>
  )
}

export default SearchBar