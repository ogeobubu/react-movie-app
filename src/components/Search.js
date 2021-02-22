import { useState } from "react/cjs/react.development";

const Search = () => {
  const [search, setSearch] = useState("");
  const searchTerm = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(searchTerm);
  };

  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Movies..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
