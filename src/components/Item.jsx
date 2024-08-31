import { useEffect, useState } from "react";

const Item = ({ url, name, sprites, base_experience }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      };
      if (!url) return;
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="w-40 bg-white rounded-md shadow-md overflow-hidden p-4 max-w-sm cursor-pointer">
      <img
        className="w-24 h-24 object-cover mx-auto"
        src={sprites ? sprites?.front_default : data?.sprites?.front_default}
        alt="Info card image"
      />
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold leading-tight text-gray-900 mb-3">
          {name && name}
        </h2>
        {data && (
          <p className="text-sm">
            <span className="font-semibold">BaseExp: </span>
            {base_experience ? base_experience : data?.base_experience}
          </p>
        )}
      </div>
    </div>
  );
};

export default Item;
