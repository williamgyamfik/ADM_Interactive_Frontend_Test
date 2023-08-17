import React from "react";

const SearchBar = (props) => {
  const { searchTerm, searchTermHandler } = props;

  const searchHandler = (e) => {
    const value = e.target.value;
    searchTermHandler(value);
  };

  return (
    <form className="">
      <label
        htmlFor="default-search"
        className=" mb-2  font-medium text-black sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-black "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          value={searchTerm}
          onChange={searchHandler}
          type="search"
          id="default-search"
          className="sm:w-[320px] placeholder-black block w-full p-2 pl-10  text-black border  rounded-lg bg-white "
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
