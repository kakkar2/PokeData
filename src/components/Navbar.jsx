const NavBar = ({ setDataChange, query, setQueryChange }) => {
  const handleQuery = async (e) => {
    e.preventDefault();
    if (query == "" && query == " ")
      return console.log("Enter something First");
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${query}`
    );
    const result = await response.json();
    setDataChange(result);
  };

  return (
    <div className="flex items-center justify-between p-3 shadow-xl">
      <h1 className="font-extrabold uppercase text-xl cursor-pointer tracking-wider italic p-2 hover:text-blue-500">
        pokeData
      </h1>
      <form onSubmit={handleQuery} className="flex items-center">
        <input
          type="text"
          className="border p-2.5 rounded-xl"
          placeholder="Search pokemon here...."
          onChange={(e) => setQueryChange(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 p-2.5 text-gray-100 rounded-xl mx-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default NavBar;
