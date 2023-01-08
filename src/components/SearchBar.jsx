import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handelFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  
  const handleChange = (event) => {
    setTerm(event.target.value); 
    // console.log(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handelFormSubmit} action="">
        <button>Search</button><span><input value={term} onChange={handleChange} /></span>
      </form>
    </div>
  )
}

export default SearchBar