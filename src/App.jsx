import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL);
        const result = await response.json();
        setData(result.results);
      };
      if (query == "") fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [query]);
  return (
    <>
      <NavBar setDataChange={setData} query={query} setQueryChange={setQuery} />
      <main className="w-11/12 mx-auto">
        <div className="flex items-center gap-5 justify-center flex-wrap p-5">
          {data?.length > 0 ? (
            data.map((item, index) => <Item {...item} key={index} />)
          ) : (
            <Item {...data} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
